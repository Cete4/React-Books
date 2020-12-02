import { Card } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import React from "react";
import "./style.css";

function BookCard(props) {
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="left" src={props.src} />
        <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text id="heavy">Author: <p>{props.author}</p></Card.Text>
            <Card.Text>{props.description}</Card.Text>
            <Button variant="primary" onClick={props.handleSaveBook}>SAVE</Button>
        </Card.Body>
    </Card>
}

export default BookCard;