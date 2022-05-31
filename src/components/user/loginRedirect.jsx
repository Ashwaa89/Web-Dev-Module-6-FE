import React, {useEffect} from "react";
import {useSearchParams,useNavigate } from "react-router-dom";
import {Container} from "react-bootstrap";
const LoginRedirect = (props) => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
useEffect(() => {   
 const getParams = Object.fromEntries(new URLSearchParams(searchParams));
 props.SetUser({ name: getParams.name, token: getParams.accessToken });   
 navigate("/");
});
return (
<Container className="justify-content-between bg-success">
Success
</Container>
);
};
export default LoginRedirect;
