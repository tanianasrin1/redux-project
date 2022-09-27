import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddBook from './Components/AddBook/AddBook';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import Navber from './Components/Shared/Navber';
import ShowBook from './Components/ShowBook/ShowBook';

function App() {
  return (
    <div>
      <Navber></Navber>
         <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='showBook' element={<ShowBook></ShowBook>}></Route>
          <Route path='addBook' element={<AddBook></AddBook>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
         </Routes>
    </div>
  );
}

export default App;
