import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import BookCard from "../components/BookCard";


function Home() {
    state = {
        value: "",
        books: []
    };

    search = query => {
        API.search(query)
            .then(res =>
                this.setState(
                    {
                        books: res.data.items,
                        search: ""
                    },
                    console.log(res.data.items)
                )
            )
            .catch(err => console.log(err));
    };

    // Loads all books and sets them to books
    function loadBooks() {
        API.getBooks()
            .then(res =>
                setBooks(res.data)
            )
            .catch(err => console.log(err));
    };

    // Handles updating component state when the user types into the input field
    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };

    // When the form is submitted, use the API.saveBook method to save the book data
    // Then reload books from the database
    function handleFormSubmit(event) {
        event.preventDefault();
        if (formObject.title && formObject.author) {
            API.saveBook({
                title: formObject.title,
                author: formObject.author,
                synopsis: formObject.synopsis
            })
                .then(res => loadBooks())
                .catch(err => console.log(err));
        }
    };

    return (
        <Container fluid>
            <Row>
                <Col size="md-12">
                    <Jumbotron>
                        <h1>Books</h1>
                    </Jumbotron>


                </Col>
            </Row>
            <Row>
                <Col>
                    {this.state.map.books.map(book => (
                        <BookCard
                            key={book.id}
                            src={book.items.imageLinks.smallThumbnail}
                            title={book.volumeInfo.authors[0]}
                            date={book.volumeInfo.publishedDate}
                            description={book.volumeInfo.description}
                            link={book.volumeInfo.infoLink}
                            link={book.volumeInfo.infoLink}
                            handleSaveBook={() => this.handleSaveBook({
                                title: book.volumeInfo.title,
                                src: book.volumeInfo.imageLinks,
                                author: book.volumeInfo.authors,
                                date: book.volumeInfo.publishedDate,
                                description: book.volumeInfo.description,
                                link: book.volumeInfo.infoLink
                            })}
                        />

                    ))}
                </Col>
            </Row>
        </Container>
    );
}


export default Home;