import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import runningImg from '../resources/running.png';
import weightImg from '../resources/weights.jpg';

export default class QuickAdd extends Component {

    render() {
        return (
            <Container>
                <h3>Quick Add</h3>
                <Row>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={runningImg} />
                            <Card.Body>
                                <Card.Title>Run</Card.Title>
                                <Card.Text>
                                    Duration: 1 Hour
                                    </Card.Text>
                                <Button variant="primary">Log Exercise</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={weightImg} />
                            <Card.Body>
                                <Card.Title>Weight Training</Card.Title>
                                <Card.Text>
                                    Duration: 1 Hour
                                    </Card.Text>
                                <Button variant="primary">Log Exercise</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}