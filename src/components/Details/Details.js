import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {
    const { id } = useParams();
    const [user, setUser] = useState({})
    useEffect(() => {
        const url = `http://localhost:5000/user/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setUser(data))
    }, [id, user])

    const handleUpdateForm = (event) => {
        event.preventDefault()
        const updateName = event.target.name.value;
        const updateJob = event.target.job.value;
        const user = { name: updateName, job: updateJob }
        const url = `http://localhost:5000/user/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                alert('user update successfully')
                event.target.reset()
            })
    }

    return (
        <div>
            <h3>{id}</h3>
            <h3>{user.name}</h3>
            <h3>{user.job}</h3>
            <form onSubmit={handleUpdateForm}>
                <input type="text" name='name' placeholder='name' />
                <br />
                <input type="text" name="job" placeholder='job' />
                <br />
                <input type="submit" value="Add User" />

            </form>
        </div>
    );
};

export default Details;