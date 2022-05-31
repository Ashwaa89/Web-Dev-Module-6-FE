import React from "react";
import { Container } from "react-bootstrap";
import BlogList from "../../components/blog/blog-list/BlogList";

const Home = (props) => {
  return (
    <Container fluid="sm">
      <h1 className="title">Welcome to the Strive Blog!</h1>
      <BlogList />
    </Container>
  );
};

export default Home;
