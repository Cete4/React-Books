import axios from "axios";

export default {
    search: function(query) {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
    },

    saveBook: function(bookData) {
        return axios.post("/api/books", bookData);
    },

    getBooks: function() {
        return axios.get("/api/books");
    },

    deleteBook: function(id) {
        return axios.delete("/api/books/" + id);
    }
};