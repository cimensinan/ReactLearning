import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import NoteForm from "./NoteForm";
import Notes from "./Notes";

const ToDoApp = () => {
  const [inputText, setInputText] = useState("");

  const [todos, setTodos] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setTodos([...todos, { text: inputText, completed: false, id: Date.now() }]);
    setInputText("");
  };

  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  return (
    <Container fluid>
      <Row>
        <Col md={3}>
          <NoteForm
            inputText={inputText}
            submitHandler={submitHandler}
            inputTextHandler={inputTextHandler}
          />
        </Col>
        <Col md={9}>
          <Notes todos={todos} setTodos={setTodos} />
        </Col>
      </Row>
    </Container>
  );
};

export default ToDoApp;
