import React from "react";
import { Card, Button } from 'react-bootstrap';
import "./style.css";

function BookCard(props) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="left" src={props.src} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text id="heavy">Author: <p>{props.author}</p></Card.Text>
                <Card.Text id="heavy">Date: <p>{props.Date}</p></Card.Text>
                <Card.Text id="heavy">Link: <a href={props.link} target={"_blank"}>{props.link}</a></Card.Text>
                <Card.Text>{props.description}</Card.Text>
                <Button variant="primary" onClick={props.handleSaveBook}>SAVE</Button>
            </Card.Body>
        </Card>
    )
}

export default BookCard;