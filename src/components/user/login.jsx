import React, {useState} from "react";
import {
  Container,
  InputGroup,
  FormControl,
  Form,
  Button,
} from "react-bootstrap";
import { BsFillPersonFill, BsFillKeyFill,BsGoogle } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
const Login = (props) => {
  const navigate = useNavigate();
  const [loginAuthor, setloginAuthor] = useState({
    email: "",
    password: "",
  });
  const login = async (e) => {
    e.preventDefault();
    let button = e.target.querySelector("button");
    try {
     await fetch(`${process.env.REACT_APP_BE_URL}/blogAuthor/login`, {
        method: "POST",
        body: JSON.stringify(loginAuthor),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((result) => {
          props.SetUser({ name: result.name, token: result.accessToken });
          button.innerText = "Logged In";
          button.classList.remove("btn-primary");
          button.classList.add("btn-success");
          setTimeout(function () {
            navigate("/");
          }, 1000);
          setloginAuthor({
            email: "",
            password: "",
          });
        })
        .catch((err) => {
          alert(err);
        });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Container className="justify-content-between">
      <h1 className="title">Register</h1>
      <>
        <Form onSubmit={login}>
          <Container>
            <InputGroup className="mb-3 my-3 w-100 text-center d-flex flex-column">
              <div className="d-flex my-3">
                <InputGroup.Text className="bg-dark text-white mr-2">
                  <BsFillPersonFill className="mx-2" />
                </InputGroup.Text>
                <FormControl
                  id="loginemail"
                  placeholder="Email"
                  aria-label="Email"
                  aria-describedby="basic-addon1"
                  type="email"
                  required
                  onChange={(e) => {
                    setloginAuthor({
                      ...loginAuthor,
                      email: e.target.value,
                    });
                  }}
                />
              </div>
              <div className="d-flex">
                <InputGroup.Text className="bg-dark text-white mr-2">
                  <BsFillKeyFill className="mx-2" />
                </InputGroup.Text>
                <FormControl
                  id="loginpassword"
                  type="password"
                  placeholder="Password"
                  aria-label="Password"
                  required
                  onChange={(e) => {
                    setloginAuthor({
                      ...loginAuthor,
                      password: e.target.value,
                    });
                  }}
                />
              </div>
              <div className="d-flex my-3">
                <div className="w-100 px-3">
                <Button variant="primary" type="submit" className="w-100">
                Login
              </Button>
                </div>
                <div className="w-100 px-3">
                  <a href={process.env.REACT_APP_BE_URL + "/blogAuthor/googleLogin"}>               
                <Button variant="secondary" type="button" className="w-100">
                <BsGoogle className="mx-2" />
                Login With Google
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

export default Login;
