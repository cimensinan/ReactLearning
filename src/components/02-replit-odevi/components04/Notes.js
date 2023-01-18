import React from "react";
import { Container, Row } from "react-bootstrap";
import Note from "./Note";

const Notes = ({ todos, setTodos }) => {
  return (
    <Container fluid>
      <Row>
        {todos.map((todo) => (
          <Note key={todo.id} todos={todos} setTodos={setTodos} {...todo} />
        ))}
      </Row>
    </Container>
  );
};

export default Notes;
