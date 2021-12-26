import React from "react";
import { Navbar, NavLink } from "react-bootstrap";
import { useSelector } from "react-redux";
import { TodolistSelector } from "../redux/selectors";
import { todoSlice } from "../redux/Todolists/TodoSlice";

export default function NavbarScreen() {
  const todolists = useSelector(TodolistSelector);
  return (
    <Navbar bg="primary" className="d-flex justify-content-center mt-5">
      <NavLink style={{ color: "white" }}>Home</NavLink>
      <NavLink style={{ color: "white" }}>About</NavLink>
      <NavLink style={{ color: "white" }}>
        Total of todo: {todolists.length}
      </NavLink>
    </Navbar>
  );
}
