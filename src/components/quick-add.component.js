import React, { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import runningImg from '../resources/running.png';
import weightImg from '../resources/weights.jpg';
import './quick-add.css';


export default class QuickAdd extends Component {

    constructor(props) {
        super(props);

        this.addRun = this.addRun.bind(this);
        this.addWeights = this.addWeights.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.state = {
            username: '',
            users: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/users/')
            .then(response => {
                if (response.data.length > 0) {
                    this.setState({
                        users: response.data.map(user => user.username),
                        username: response.data[0].username
                    })
                }
            })
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    addRun() {
        const exercise = {
            username: this.state.username,
            description: 'Run',
            duration: 60,
            date: new Date()
        }

        axios.post('http://localhost:5000/exercises/add', exercise)
            .then(res => console.log(res.data));

        window.location = '/';
    }

    addWeights() {
        const exercise = {
            username: this.state.username,
            description: 'Run',
            duration: 60,
            date: new Date()
        }

        axios.post('http://localhost:5000/exercises/add', exercise)
            .then(res => console.log(res.data));

        window.location = '/';
    }

    render() {
        return (
            <Container>
                <h3>Quick Add</h3>
                <label>Username: </label>
                <select ref={this.userRef}
                    required
                    className="form-control"
                    value={this.state.username}
                    onChange={this.onChangeUsername}>
                    {
                        this.state.users.map(function (user) {
                            return <option
                                key={user}
                                value={user}>{user}
                            </option>;
                        })
                    }
                </select>
                <Row>
                    <Col>
                        <Card style={{ width: '18rem', margin: '2rem' }}>
                            <Card.Img className='QuickAdd-img' variant="top" src={runningImg} />
                            <Card.Body>
                                <Card.Title>Run</Card.Title>
                                <Card.Text>
                                    Duration: 1 Hour
                                </Card.Text>
                                <Button variant="primary" onClick={this.addRun}>Log Exercise</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem', margin: '2rem' }}>
                            <Card.Img className='QuickAdd-img' variant="top" src={weightImg} />
                            <Card.Body>
                                <Card.Title>Weight Training</Card.Title>
                                <Card.Text>
                                    Duration: 1 Hour
                                </Card.Text>
                                <Button variant="primary" onClick={this.addWeights}>Log Exercise</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}