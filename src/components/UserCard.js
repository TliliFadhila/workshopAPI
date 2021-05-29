import React from 'react'
import { Button, Card } from 'react-bootstrap'

const UserCard = ({ user }) => {
    console.log(user);
    return (
        <Card style={{ width: "18rem", margin: "20px" }}>
        <span className="profile">{user.name[0]}</span>
        <Card.Body>
          <Card.Title>{user.name}</Card.Title>
          <p>{user.username}</p>
          <p>{user.email}</p>
          <p>{user.phone}</p>
          <Button variant="primary">READ DETAILS</Button>
        </Card.Body>
      </Card>
    )
}

export default UserCard
