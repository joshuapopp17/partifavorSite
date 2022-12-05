import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function TeamCard({name, photo, message, roles}) {
  return (
    <Card style={{ borderRadius: 5, borderWidth: 1, border: 'solid', borderColor: 'lightgrey' ,marginBottom: 10, width: '100%', minWidth: 300 ,maxWidth: 500}}>
    <Card.Img src={photo} style={{width: '100%', height: 400, objectFit: 'cover'}}></Card.Img>
    <Card.Body>
      <Card.Title style={{color: '#FF8F1C'}}>{name}</Card.Title>
      <Card.Text style={{marginLeft: 10}}>
        <Card.Subtitle>Position</Card.Subtitle>
        <Card.Text><ul>{roles.map((role) => <li>{role}</li>)}</ul></Card.Text>
        <Card.Subtitle>Message</Card.Subtitle>
        <Card.Text>{message}</Card.Text>
      </Card.Text>
    </Card.Body>
  </Card>
  )
}

export default TeamCard