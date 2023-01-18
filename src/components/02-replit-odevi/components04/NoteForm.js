import React from "react";
import { Button, Form, InputGroup } from "react-bootstrap";

const NoteForm = ({ inputText, submitHandler, inputTextHandler }) => {
  return (
    <>
      <Form.Label htmlFor="basic-url">
        <h5>Title</h5>
      </Form.Label>
      <InputGroup className="mb-3">
        <Form.Control
          id="basic-url"
          placeholder="Add title"
          onChange={inputTextHandler}
          value={inputText}
        />
      </InputGroup>
      <Button variant="info" type="submit" onClick={submitHandler}>
        Create Note
      </Button>
    </>
  );
};

export default NoteForm;
