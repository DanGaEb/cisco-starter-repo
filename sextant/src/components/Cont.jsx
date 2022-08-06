import React from 'react';
import Card from 'react-bootstrap/Card';

const Card_container = () => {
    return (
        <div className='Cont'>
            <Card>
                <Card.Header>Sextant</Card.Header>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Text
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>

    )
}

export default Card_container