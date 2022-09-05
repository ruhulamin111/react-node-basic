
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch('http://localhost:5000/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [users])

  const handleForm = (event) => {
    event.preventDefault()
    console.log('click');
  }


  return (
    <div className='test'>
      <form onSubmit={handleForm}>
        <input type="text" name='name' placeholder='name' />
        <br />
        <input type="email" name="email" placeholder='email' />
        <br />
        <input type="submit" value="Add User" />

      </form>
      <ul>
        {
          users.map((user, index) => <li key={index}>{user.name}</li>)
        }
      </ul>

    </div>
  );
}

export default App;
