import React from "react";
import { Button, Card } from "react-bootstrap";

const Product = (props) => {
  console.log(props);

  const addToCart = () => {
    alert(`${title} added to cart`)
  }

  const { image, desc, title, price } = props;

  const newTitle = title.toUpperCase()

  return (
    <Card className="h-100">
      <Card.Img variant="top" src={require(`./images/${image}`)} />
      <Card.Body className="text-center d-flex flex-column justify-content-between align-items-center">
        <Card.Title className="fs-2">{newTitle}</Card.Title>
        <Card.Text>{desc}</Card.Text>
        <Card.Subtitle className="fs-3 text-info"><strong>${price}</strong></Card.Subtitle>
        <Button variant="warning" onClick={addToCart}>Add to cart</Button>
      </Card.Body>
    </Card>
  );
};

export default Product;
