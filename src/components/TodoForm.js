import Button from "@restart/ui/esm/Button";
import { nanoid } from "nanoid";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/Todolists/TodoSlice";

export default function TodoForm() {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();
  const handleAddTodo = () => {
    if (todo.trim()) {
      dispatch(
        addTodo({
          id: nanoid(),
          title: todo,
          completed: false,
        })
      );
      setTodo("");
    }
  };
  return (
    <div className="d-flex flex-column align-items-center m-3">
      <h1>Nhap cong viec can lam</h1>
      <input
        type="text"
        placeholder="Enter your work ... "
        className="my-3 col-3"
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      ></input>
      <Button className="btn btn-primary col-3" onClick={handleAddTodo}>
        Enter
      </Button>
    </div>
  );
}
