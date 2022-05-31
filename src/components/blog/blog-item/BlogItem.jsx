import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import BlogAuthor from "../blog-author/BlogAuthor";
import { useState, useEffect } from "react";
import "./styles.css";
const BlogItem = (props) => {
  const [post, setPost] = useState();
  useEffect(async () => {
    setPost(props.post);
  }, []);
  return (
    <>
      {post !== undefined ? (
        <Col xs={6}>
          <Link to={`/blog/${post._id}`} className="blog-link">
            <Card className="blog-card">
              <Card.Img variant="top" src={post.cover} className="blog-cover" />
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
              </Card.Body>
              <Card.Footer>
                <BlogAuthor
                  name={post.author ? post.author.name : ""}
                  avatar={post.author ? post.author.avatar : ""}
                />
              </Card.Footer>
            </Card>
          </Link>
        </Col>
      ) : (
        ""
      )}
    </>
  );
};
export default BlogItem;
