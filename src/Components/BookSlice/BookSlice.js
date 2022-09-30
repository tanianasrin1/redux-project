import { createSlice } from "@reduxjs/toolkit";

const initionalBook = {
    books: [
        {id:1, title: "Machine Learning", author:"Mr. jhon"},
        {id:2, title: "Cambridge Esol", author:"Mr. jhon"}
        
    ],
};
 
export const booksSlice = createSlice({
    name: "books",
    initialState: initionalBook,
    reducers: {
        showBooks: (state) => state,
        addBooks: (state, action) => {
            state.books.push(action.payload);
        },
        deleteBooks: (state, action) => {
            const id = action.payload;
            state.books = state.books.filter(book => book.id !== id);
        },
    }
})

export const {showBooks, addBooks, deleteBooks} = booksSlice.actions;
export default booksSlice.reducer;