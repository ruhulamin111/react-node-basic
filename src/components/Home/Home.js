import React, { useEffect, useState } from 'react';

const Home = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/user')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [users])

    const handleForm = (event) => {
        event.preventDefault()
        const name = event.target.name.value;
        const job = event.target.job.value;
        const user = { name, job }

        fetch('http://localhost:5000/user', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                alert('user added successfully')
                event.target.reset()
            })
    }
    const deleteOne = (id) => {
        const proceed = window.confirm('are you sure delete this item?')
        if (proceed) {
            console.log(id);
        }
    }

    return (
        <div className='test'>
            <form onSubmit={handleForm}>
                <input type="text" name='name' placeholder='name' />
                <br />
                <input type="text" name="job" placeholder='job' />
                <br />
                <input type="submit" value="Add User" />

            </form>
            <ul>
                {
                    users.map((user, index) => <li key={index}>{user.name} <button onClick={() => deleteOne(user._id)}>Delete</button></li>)
                }
            </ul>

        </div>
    );
};

export default Home;