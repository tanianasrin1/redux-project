import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBooks } from '../BookSlice/BookSlice';


const BooksView = () => {
    const books = useSelector((state) => state.booksReducer.books);
    // console.log(books);
    const dispatch = useDispatch();
   const handleDeleteBook = (id) => {
    dispatch(deleteBooks(id));
   }

    return (
        <div>
            <h2>List of Book</h2>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {books && books.map((book)=> {
                        const {id, title, author} = book;
                        console.log(book)
                        return (
                            <tr key={id}>
                            <td> {id} </td>
                            <td> {title} </td>
                            <td> {author} </td>
                            <td>
                                <button >Edit</button>
                                <button onClick={() =>{handleDeleteBook(id)} }>Delete</button>
                            </td>
                            
                        </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default BooksView;