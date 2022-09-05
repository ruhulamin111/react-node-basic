
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch('http://localhost:5000/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [users])

  return (
    <div>
      <ul>
        {
          users.map((user, index) => <li key={index}>{user.name}</li>)
        }
      </ul>

    </div>
  );
}

export default App;
