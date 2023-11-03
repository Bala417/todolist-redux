import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../state/reducer/reducer";
import { useNavigate } from "react-router-dom";
import { Form, Button, InputGroup } from "react-bootstrap";

function CreateTodo() {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(todo));
    navigate("/");
  };
  return (
    <div className="container middle">
      <Form onSubmit={handleSubmit}>
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Add Todo"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
        </InputGroup>
        {/* <input value={todo} onChange={(e) => setTodo(e.target.value)} /> */}

        <Button variant="primary" type="submit">
          Add
        </Button>
      </Form>
    </div>
  );
}

export default CreateTodo;
