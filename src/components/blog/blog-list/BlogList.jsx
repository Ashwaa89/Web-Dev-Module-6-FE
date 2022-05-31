import React from "react";
import { Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import BlogItem from "../blog-item/BlogItem";
import { useSearchParams } from "react-router-dom";
import Pagination from "../../../components/pagination/MyPagination";

const BlogList = (props) => {
  const [posts, setPosts] = useState();
  const [links, setLinks] = useState();
  //const [totalPages, settotalPages] = useState();
  //const params = useSearchParams();
  const [searchParams] = useSearchParams();
  useEffect(async () => {
    let response = await fetch(
      `${process.env.REACT_APP_BE_URL}/blogposts?limit=${
        searchParams.get("limit") ? searchParams.get("limit") : 100
      }&offset=${searchParams.get("offset")}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${props.token}`,
        },
      }
    );
    if (response.ok) {

      let resposts = await response.json();
      console.log(resposts)
      setPosts(resposts.blogPosts);
      setLinks(resposts.links);
    //  settotalPages(resposts.totalPages);
      setLinks(resposts.links);
    }
  }, []);

  return (
    <Row className="g-2 row-cols-1">
      {links ? <Pagination links={links}></Pagination> : ""}
      {posts
        ? posts.map((post) => (
            <>
              <BlogItem key={post._id} post={post}></BlogItem>
            </>
          ))
        : ""}
    </Row>
  );
};

export default BlogList;
