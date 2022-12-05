import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function NewsCard() {
  return (
    <Card style={{ marginBottom: 10 }}>
    <Card.Body>
      <Card.Title>January 1, 2023</Card.Title>
      <Card.Text>
        <Card.Subtitle>News</Card.Subtitle>
        <Card.Text>- Website is up and running</Card.Text>
      </Card.Text>
    </Card.Body>
  </Card>

  )
}

export default NewsCard