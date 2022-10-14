import React, { useState } from "react";
import { Button, Modal, Col, Row } from "react-bootstrap";
import styled from "styled-components";
const List = styled.li`
  list-style-type: none;
  padding: 4px;
`;
const ModalHeader = styled(Modal.Header)`
  background: linear-gradient(180deg, #ffdb58 0%, rgba(255, 219, 88, 0) 100%);
  border-bottom: none;
`;
const Input = styled.input`
  margin: 3px;
`;
const ModalFooter = styled(Modal.Footer)`
  justify-content: center;
`;
const ViewButton = styled.button`
  width: 100%;
  background: none;
`;

const SelectButton = styled(Button)`
  width: 50%;
`;
const SelectModal = (props) => {
  const Documents = [
    "Employment Policy",
    "Internship Policy",
    "Covid 19 Policy",
    "Leave policy",
    "Assest Policy"
  ];
  return (
    <>
      <Modal show={props.show} onHide={props.onHide}>
        <ModalHeader closeButton>
          <Modal.Title>Key Policy Documents</Modal.Title>
        </ModalHeader>
        <Modal.Body>
          {Documents.map((value, id) => {
            return (
              <List key={id}>
                <Row>
                  <Col lg={8}>
                    <Input
                      type="checkbox"
                      id={`custom-checkbox-${id}`}
                      name={value}
                      value={value}
                    />
                    <label htmlFor={`custom-checkbox-${id}`}>{value}</label>
                  </Col>
                  <Col lg={4}>
                    <ViewButton>view</ViewButton>
                  </Col>
                </Row>
              </List>
            );
          })}
        </Modal.Body>
        <ModalFooter>
          <SelectButton variant="warning" onClick={props.onHide}>
            Select
          </SelectButton>
        </ModalFooter>
      </Modal>
    </>
  );
};
export default SelectModal;
