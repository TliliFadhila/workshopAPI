import React, { useEffect, useState } from 'react'
import UserCard from './UserCard';

const UserList = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
              fetch("https://jsonplaceholder.typicode.com/users")
                .then(res => res.json())
                .then(json => setUsers(json))
                .catch(err => console.log(err));
    }, [])
    return (
        <div className="d-flex justify-content-around flex-wrap">
            {
                users.map(user => <UserCard user={user}/>)
            }
        </div>
    )
}

export default UserList
