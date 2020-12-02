import React from "react";
import { Button, Navbar, Form, FormControl } from 'react-bootstrap';
import "./style.css";

function Search(props) {
    return (
        <Navbar className="bg-light justify-content-between">
            <Form inline>
                <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
                <Button type="submit" onClick={props.handleFormSubmit}>Submit</Button>
            </Form>
        </Navbar>
    )
}

export default Search;