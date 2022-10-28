import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export const AddTodo = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("Title or description cannot be empty!");
    } else {
      addTodo(title, desc);
      setTitle("");
      setDesc("");
    }
  };

  return (
    <>
      <Form onSubmit={submit} className="container my-3">
        <h3 className="mb-4 text-center pt-3">Add a To-do Item</h3>
        <Form.Group className="mb-3" controlId="title">
          <Form.Label>Todo Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Todo Title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="desc">
          <Form.Label>Todo Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Todo Description"
            value={desc}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
          />
        </Form.Group>
        <Button className="btn-sm my-3" variant="success" type="submit">
          Add Todo
        </Button>
        <hr />
      </Form>
    </>
  );
};
