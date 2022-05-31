import React, { useState } from "react";
import "../../components/styles.css";
import {
  Container,
  InputGroup,
  FormControl,
  Form,
  Button,
} from "react-bootstrap";
import { BsGoogle } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Register = (props) => {
  const navigate = useNavigate();
  const [newAuthor, setnewAuthor] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    dateOfBirth: "",
  });
  const submitRegisterForm = async (e) => {
    e.preventDefault();
    let button = e.target.querySelector("button");
    try {
      let response = await fetch(`${process.env.REACT_APP_BE_URL}/blogAuthor/register`, {
        method: "POST",
        body: JSON.stringify(newAuthor),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        button.innerText = "Registered";
        button.classList.remove("btn-primary");
        button.classList.add("btn-success");
        setTimeout(function () {
          navigate("/login");
        }, 1000);

        setnewAuthor({
          name: "",
          surname: "",
          email: "",
          password: "",
          dateOfBirth: "",
        });
      } else {
        alert(response);
        alert("error!");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Container className="justify-content-between">
      <h1 className="title">Register</h1>
      <>
        <Form onSubmit={submitRegisterForm}>
          <Container>
            <InputGroup className="mb-3 my-3 w-100 text-center d-flex flex-column">
              <div className="d-flex my-1">
                <FormControl
                  id="newAuthorName"
                  placeholder="Name"
                  aria-label="Name"
                  aria-describedby="basic-addon1"
                  required
                  onChange={(e) => {
                    setnewAuthor({
                      ...newAuthor,
                      name: e.target.value,
                    });
                  }}
                />
              </div>
              <div className="d-flex my-1">
                <FormControl
                  id="newAuthorSurname"
                  placeholder="Surname"
                  aria-label="Surname"
                  aria-describedby="basic-addon1"
                  required
                  onChange={(e) => {
                    setnewAuthor({
                      ...newAuthor,
                      surname: e.target.value,
                    });
                  }}
                />
              </div>
              <div className="d-flex my-1">
                <FormControl
                  id="newAuthorEmail"
                  placeholder="Email"
                  aria-label="Email"
                  aria-describedby="basic-addon1"
                  type="email"
                  required
                  onChange={(e) => {
                    setnewAuthor({
                      ...newAuthor,
                      email: e.target.value,
                    });
                  }}
                />
              </div>
              <div className="d-flex my-1">
                <FormControl
                  id="newAuthorPassword"
                  placeholder="Password"
                  aria-label="Password"
                  aria-describedby="basic-addon1"
                  type="password"
                  required
                  onChange={(e) => {
                    setnewAuthor({
                      ...newAuthor,
                      password: e.target.value,
                    });
                  }}
                />
              </div>
              <div className="d-flex my-1">
                <FormControl
                  id="newAuthordob"
                  placeholder="Date of Birth"
                  aria-label="Date of Birth"
                  aria-describedby="basic-addon1"
                  type="Date"
                  required
                  onChange={(e) => {
                    setnewAuthor({
                      ...newAuthor,
                      dateOfBirth: e.target.value,
                    });
                  }}
                />
              </div>

              <div className="d-flex my-3">
                <div className="w-100 px-3">
                <Button variant="primary" type="submit" className="w-100">
                Register
              </Button>
                </div>
                <div className="w-100 px-3">
                <a href={process.env.REACT_APP_BE_URL + "/blogAuthor/googleLogin"}>                   
                <Button variant="secondary" type="button" className="w-100">
                <BsGoogle className="mx-2" />
                Register With Google
              </Button>
              </a>
                </div>
              </div>
            </InputGroup>
          </Container>
        </Form>
      </>
    </Container>
  );
};

export default Register;
