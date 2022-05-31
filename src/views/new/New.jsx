import React, { useState } from "react";
import { Button, Container, Form, Row, Card, Col } from "react-bootstrap";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./styles.css";
import { useNavigate } from "react-router-dom";
const NewBlogPost = (props) => {
  const navigate = useNavigate();
  // const [text, setText] = useState("");
  const [blogpost, setBlogpost] = useState({
    category: "Category 1",
    title: "",
    content: "",
  });
  const addPost = async (e) => {
    e.preventDefault();

    try {
      let response = await fetch(`${process.env.REACT_APP_BE_URL}/blogposts`, {
        method: "POST",
        body: JSON.stringify(blogpost),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${props.token}`,
        },
      });
      if (response.ok) {
        alert("Blog saved!");

        setBlogpost({
          category: "",
          title: "",
          content: "",
        });
        e.target
          .querySelector("#newBlogContent")
          .querySelector(".ql-editor")
          .querySelector("p").innerText = "";
        //getComments();
      } else {
        alert(response);
        alert("error!");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      {props.User === undefined ? (
        <>
          <Container className="justify-content-between mt-5">
            <Row className="mt-5">
              <Col className="mt-5">
                <Card className="mt-5">Please Login First</Card>
              </Col>
            </Row>
          </Container>
          {navigate("/login")}
        </>
      ) : (
        <Container className="new-blog-container">
          <Form className="mt-5" onSubmit={addPost}>
            <Form.Group controlId="blog-form" className="mt-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                size="lg"
                placeholder="Title"
                value={blogpost.title}
                onChange={(e) => {
                  setBlogpost({
                    ...blogpost,
                    title: e.target.value,
                  });
                }}
              />
            </Form.Group>
            <Form.Group controlId="blog-category" className="mt-3">
              <Form.Label>Category</Form.Label>
              <Form.Control
                size="lg"
                as="select"
                value={blogpost.category}
                onChange={(e) => {
                  setBlogpost({
                    ...blogpost,
                    category: e.target.value,
                  });
                }}
              >
                <option>Category1</option>
                <option>Category2</option>
                <option>Category3</option>
                <option>Category4</option>
                <option>Category5</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="blog-content" className="mt-3">
              <Form.Label>Blog Content</Form.Label>
              <ReactQuill
                id="newBlogContent"
                onChange={(content, delta, source, editor) => {
                  setBlogpost({
                    ...blogpost,
                    content: editor.getText(content),
                  });
                }}
                className="new-blog-content"
              />
            </Form.Group>
            <Form.Group className="d-flex mt-3 justify-content-end">
              <Button type="reset" size="lg" variant="outline-dark">
                Reset
              </Button>
              <Button
                type="submit"
                size="lg"
                variant="dark"
                style={{
                  marginLeft: "1em",
                }}
              >
                Submit
              </Button>
            </Form.Group>
          </Form>
        </Container>
      )}
    </>
  );
};

export default NewBlogPost;
