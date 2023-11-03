import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { removeTodo } from "../state/reducer/reducer";
//react bootstrap*
import { Form, Button, Row, Col } from "react-bootstrap";

function Home() {
  const todos = useSelector((state) => state.reducer.list);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDelete = (e, todo) => {
    e.preventDefault();

    dispatch(removeTodo(todo));
  };

  const handleUpdate = (e, todo) => {
    e.preventDefault();
    //PASSING DATA USING USENAVIAGE *************
    navigate(`/update/${todo.id}`, { state: todo });
  };
  return (
    <div className=" container middle">
      <Form>
        <Link to="/create">
          <Button variant="primary">Create</Button>
        </Link>
        {todos.map((todo) => {
          return (
            <div key={todo.id}>
              <Row>
                <Col>
                  <h3>{todo.text}</h3>
                </Col>
                <Col>
                  <Button
                    variant="secondary"
                    onClick={(e) => handleUpdate(e, todo)}
                  >
                    update
                  </Button>
                </Col>
                <Col>
                  <Button
                    variant="danger"
                    onClick={(e) => handleDelete(e, todo)}
                  >
                    Delete
                  </Button>
                </Col>
              </Row>
            </div>
          );
        })}
      </Form>
    </div>
  );
}

export default Home;
