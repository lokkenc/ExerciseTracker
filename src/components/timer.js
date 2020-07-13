import React, { useState, useEffect } from 'react';
import './timer.css';

const Timer = (props) => {
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);

    function toggle() {
        setIsActive(!isActive);
    }

    function reset() {
        setSeconds(0);
        setIsActive(false);
    }

    function commitTime() {
        props.handleClick(minutes + (seconds >= 30 ? 1 : 0));
    }

    useEffect(() => {
        let interval = null;
        if (isActive) {
            interval = setInterval(() => {
                setSeconds(seconds => {
                    if (seconds !== 0 && seconds % 60 === 0) {
                        setMinutes(minutes => minutes + 1);
                        return 0;
                    }
                    return seconds + 1;
                });
            }, 1000);
        } else if (!isActive && seconds !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, seconds]);

    return (
        <div className="app">
            <div className="time">
                {minutes}m {seconds}s
            </div>
            <div className="row">
                <button type="button" className={`button button-primary button-primary-${isActive ? 'active' : 'inactive'}`} onClick={toggle}>
                    {isActive ? 'Pause' : 'Start'}
                </button>
                <button type="button" className="button" onClick={reset}>
                    Reset
                </button>
                <button type="button" className="button" onClick={commitTime}>
                    Use This Time
                </button>
            </div>
        </div>
    );
};

export default Timer;