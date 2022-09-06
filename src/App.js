
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import User from './components/User/User';

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/user/add' element={<User></User>}></Route>

      </Routes>

    </div>
  );
}

export default App;
