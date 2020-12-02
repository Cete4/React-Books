import { Card } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import React from "react";
import "./style.css";

function BookCard(props) {
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="left" src={props.src} />
        <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
    </Card.Text>
            <Button variant="primary">Go somewhere</Button>
        </Card.Body>
    </Card>
}

export default BookCard;