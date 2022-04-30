import React from 'react';
import { Col, Card } from 'react-bootstrap';

const Activity = ({ activity }) => {
    const { name, img } = activity;
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body className='bg-primary text-white'>
                    <Card.Title>{name}</Card.Title>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Activity;