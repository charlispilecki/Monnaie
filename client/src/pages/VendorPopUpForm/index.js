import React, { useState } from "react";
import Container from "../../components/Container";
import Col from "../../components/Col";
import Row from "../../components/Row";

const InputForm = () => {
  const [inputNameState, setInputName] = useState();
  const [inputLocationState, setInputLocation] = useState();
  const [inputPhoneNoState, setInputPhoneNo] = useState();
  const [inputEmailState, setInputEmail] = useState();

  const handleSubmit = e => {
    e.preventDefault();
    console.log("Name is " + inputNameState);
    console.log("Location is " + inputLocationState);
    console.log("Phone nO is " + inputPhoneNoState);
    console.log("Email is " + inputEmailState);
  };

  return (
    <div>
      <div className="mt-4">
        <h2>Welcome to Vendor Page</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <Container className="mt-3 px-5">
          <Row className="form-group">
            <Col size="12">
              <input
                className="form-control"
                type="text"
                placeholder="Username"
                name="username"
                onChange={e => setUsername(e.target.value)}
              />
            </Col>
          </Row>
          <Row className="form-group">
            <Col size="12">
              <input
                className="form-control"
                type="password"
                placeholder="Password"
                name="password"
                onChange={e => setPassword(e.target.value)}
              />
            </Col>
          </Row>
          <button className="btn btn-success" type="submit">
            Submit
          </button>
        </Container>
        <Container className="mt-4">
          <h3>Hello {username}!</h3>
          <p>I probably shouldn't tell you this, but your password is {password}!</p>
        </Container>
      </form>
    </div>
  );
};

export default InputForm;
