import React from "react";
import { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import BookCard from "../components/BookCard";
import Search from "../components/Search";


class Home extends Component {
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
                ))
            .catch(err => console.log(err));
    };

    // Handles updating component state when the user types into the input field
    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    };

    // When the form is submitted, use the API.saveBook method to save the book data
    // Then reload books from the database
    handleFormSubmit = event => {
        event.preventDefault();
        this.search(this.state.search);
    };

    handleSave = book => {
        API.saveBook(book)
            .then(console.log(book))
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col size="md-12">
                            <Jumbotron>
                                <h1>Books</h1>
                            </Jumbotron>


                        </Col>
                    </Row>
                    <Row>
                        <Col size="md-12">
                            <Search
                                value={this.state.search}
                                handleInputChange={this.handleInputChange}
                                handleFormSubmit={this.handleFormSubmit}>
                            </Search>
                        </Col>
                    </Row>
                    <br></br>
                    <Row>
                        <Col size="md-12">
                            <h1>Book Search Results</h1>
                            {this.state.books.map(book => (
                                <BookCard
                                    key={book.id}
                                    title={book.volumeInfo.author}
                                    src={book.volumeInfo.imageLinks.smallThumbnail}
                                    title={book.volumeInfo.author}
                                    date={book.volumeInfo.publishedDate}
                                    description={book.volumeInfo.description}
                                    link={book.volumeInfo.infoLink}
                                    handleSave={() => this.handleSave({
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
                </Container >
            </div >
        );
    }
}

export default Home;