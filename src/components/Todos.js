import React, { useEffect } from "react";
import { ListGroup, ListGroupItem, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { TodolistSelector } from "../redux/selectors";
import {
  updateCompleted,
  deleteTodo,
  getTodos,
} from "../redux/Todolists/TodoSlice";
export default function Todos() {
  const todos = useSelector(TodolistSelector);
  const dispatch = useDispatch();
  const handleChangeCompleted = (idtodo) => {
    dispatch(updateCompleted(idtodo));
  };
  const handleDelete = (idtodo) => {
    dispatch(deleteTodo(idtodo));
  };
  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);
  
  return (
    <div style={{ backgroundColor: "#d1d1d1" }}>
      <ListGroup className="m-auto d-flex justify-content-center p-3">
        {todos.map((value, index) => (
          <ListGroupItem
            key={index}
            className={value.completed ? "completed my-2" : "my-2"}
          >
            <div className="d-flex justify-content-between align-items-center">
              {value.title}

              <div className="d-flex justify-content-end align-items-center">
                <input
                  style={{ height: "30px", width: "30px" }}
                  type={"checkbox"}
                  checked={value.completed}
                  onChange={(e) => {
                    handleChangeCompleted(value.id);
                  }}
                ></input>
                <Button
                  className="btn btn-danger"
                  onClick={() => {
                    handleDelete(value.id);
                  }}
                >
                  Delete
                </Button>
              </div>
            </div>
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
}
