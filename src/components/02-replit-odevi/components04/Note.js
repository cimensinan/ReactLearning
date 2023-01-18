import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { AiOutlineCheckCircle, AiFillDelete } from "react-icons/ai";

const Note = ({ text, todos, setTodos, id, completed }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            completed: true,
          };
        }
        return item;
      })
    );
  };

  return (
    <Col md={4} className="my-2">
      <Card>
        <Card.Body>
          {!completed ? (
            <Card.Title>{text}</Card.Title>
          ) : (
            <Card.Title>
              <del>{text}</del>
            </Card.Title>
          )}
        </Card.Body>
        <Card.Footer className="d-flex gap-2">
          <Button variant="light" onClick={completeHandler}>
            <AiOutlineCheckCircle
              style={{
                color: "green",
                marginBottom: ".3rem",
                fontSize: "1.3rem",
              }}
            />
          </Button>
          <Button variant="light" onClick={deleteHandler}>
            <AiFillDelete
              style={{
                color: "red",
                marginBottom: ".3rem",
                fontSize: "1.3rem",
              }}
            />
          </Button>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default Note;
