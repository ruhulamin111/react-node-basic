
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Details from './components/Details/Details';
import Home from './components/Home/Home';
import User from './components/User/User';

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/user/add' element={<User></User>}></Route>
        <Route path='/user/:id' element={<Details></Details>}></Route>

      </Routes>

    </div>
  );
}

export default App;
