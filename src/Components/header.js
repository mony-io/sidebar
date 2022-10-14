import React from "react";
import { Nav, Navbar, Form, Button, InputGroup, Col } from "react-bootstrap";
import styled from "styled-components";
import { FaBell, FaCommentDots, FaUserAlt, FaSistrix } from "react-icons/fa";
const Snavbar = styled(Navbar)`
  background-color: #fcde73;
  padding: 30px;
`;
const Header = () => {
  return (
    <Snavbar bg="#FCDE73" expand="lg">
      <Navbar.Brand href="/employees">Employees</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll" className="justify-content-end">
        <Nav
          className="mr-auto my-2 my-lg-0"
          style={{ maxHeight: "100px" }}
          navbarScroll
        >
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="mr-2"
              aria-label="Search"
            />
            <Button>
              <FaSistrix />
            </Button>
          </Form>
          <Nav.Link href="#action1">
            <FaBell />
          </Nav.Link>
          <Nav.Link href="#action2">
            <FaCommentDots />
          </Nav.Link>
          <Nav.Link href="#">
            <FaUserAlt />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Snavbar>
  );
};
export default Header;
