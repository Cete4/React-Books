import React from "react";
import { Button } from 'react-bootstrap';
import "./style.css";

function Search(props) {
    return (
        <Navbar className="bg-light justify-content-between">
            <Form inline>
                <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
                <Button type="submit" onClick={props.search}>Submit</Button>
            </Form>
        </Navbar>
    )
}

export default Search;