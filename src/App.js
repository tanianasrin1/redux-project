import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddBook from './Components/AddBook/AddBook';
import BooksView from './Components/BooksView/BooksView';
import EditBook from './Components/EditBook/EditBook';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import Navber from './Components/Shared/Navber';


function App() {
  return (
    <div>
      <Navber></Navber>
         <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='showBook' element={<BooksView></BooksView>}></Route>
          <Route path='addBook' element={<AddBook></AddBook>}></Route>
          <Route path='edit-book' element={<EditBook></EditBook>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
         </Routes>
    </div>
  );
}

export default App;
