import React from "react";
import { Card, Button, Row } from "react-bootstrap";
import styled from "styled-components";

export const CardImage = styled(Card.Img)`
  padding: 0 70px;
`;

export const CardSec = styled(Card)`
  border: none;
  box-shadow: -1px 2px 4px 2px rgb(234 201 81 / 50%);
`;

const Employee = () => {
  return (
    <Row className="mt-3">
      <CardSec style={{ width: "18rem" }}>
        <CardImage variant="top" src="Assets/profile.png" />
        <Card.Body className="text-center">
          <Card.Title>Applicant 2</Card.Title>
          <Card.Text>
            <p>Applicant1@gmail.com</p>
            <p>UX/UI Designer</p>
            <p>9959149451</p>
          </Card.Text>
          <Button href="/profile" variant="warning">
            view
          </Button>
        </Card.Body>
      </CardSec>
    </Row>
  );
};
export default Employee;
