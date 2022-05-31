import React from "react";
import {  useEffect } from "react";
import { Col } from "react-bootstrap";

const MyPagination = (props) => {
  useEffect(async () => {
    console.log(props.links);
  }, []);

  return (
    <div className="w-100 d-flex">
      <Col className="d-flex w-100">
        {props.links.first || props.links.prev ? (
          <div className="d-flex flex-column">
            {props.links.first ? (
              <div className="ms-0">
                <a href={props.links.first}>First</a>
              </div>
            ) : (
              ""
            )}
            {props.links.prev ? (
              <div className="ms-0">
                <a href={props.links.prev}>Prev</a>
              </div>
            ) : (
              ""
            )}
          </div>
        ) : (
          ""
        )}
      </Col>

      <Col className="d-flex mx-auto me-0 w-100">
        {props.links.last || props.links.next ? (
          <div className=" d-flex flex-column w-100 ">
            {props.links.last ? (
              <div className="ms-0 text-end">
                <a href={props.links.last}>Last</a>
              </div>
            ) : (
              ""
            )}

            {props.links.next ? (
              <div className="ms-0 text-end">
                <a href={props.links.next}>Next</a>
              </div>
            ) : (
              ""
            )}
          </div>
        ) : (
          ""
        )}
      </Col>
    </div>
  );
};

export default MyPagination;
