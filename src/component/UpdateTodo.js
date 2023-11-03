import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateTodo } from "../state/reducer/reducer";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Form, InputGroup } from "react-bootstrap";

function UpdateTodo() {
  const [update, setUpdate] = useState("");
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(location.state);
    const preState = { ...location.state, text: update };
    console.log(preState);

    dispatch(updateTodo(preState));

    navigate("/");
  };
  return (
    <div className="container middle">
      <Form onSubmit={handleSubmit}>
        <InputGroup>
          <Form.Control
            value={update}
            onChange={(e) => setUpdate(e.target.value)}
          />
          <Button>Update</Button>
        </InputGroup>
      </Form>
    </div>
  );
}

export default UpdateTodo;
