import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Contact(){
  return (
    <div>Contact
      <Outlet/>
      <button><Link to="names">Names</Link></button>
      <button><Link to="values">Values</Link></button>
    </div>
  )
}


export default Contact


 export function Names(){
return(
  <div>
   <Card style={{ width: '18rem' }}>
      <Card.Img variant="top"/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  </div>
)
}

export function Values(){
  return(
    <div>
   <Card>
        <Card.Img variant="top"  />
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
      <Card>
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        <Card.Img variant="bottom"  />
      </Card>
    </div>
  )
}
  