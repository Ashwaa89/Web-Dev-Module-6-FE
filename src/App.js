import NavBar from "./components/navbar/BlogNavbar";
import Footer from "./components/footer/Footer";
import Home from "./views/home/Home";
import Blog from "./views/blog/Blog";
import NewBlogPost from "./views/new/New";
import Register from "./components/user/register";
import Login from "./components/user/login";
import LoginRedirect from "./components/user/loginRedirect";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./components/styles.css";
const App = (props) => {
  const [user, setUser] = useState();
  const SetUser = (User) => {
    setUser(User);
  };

  return (
    <BrowserRouter>
      <NavBar User={user} />
      <Routes>      
      <Route path="/" element={<Home User={user} SetUser={SetUser} />} />
{/* error here, redirects to 404 page, checked against working code but can't work out why  */}
<Route path="/blog/:id" element={<Blog User={user} SetUser={SetUser}/>} />   
    
<Route path="/new" element={<NewBlogPost User={user} SetUser={SetUser} />}/>  
<Route path="/register" element={<Register />} />

<Route path="/login" element={<Login User={user} SetUser={SetUser} />}/>

{/* error here in console index.js:44 No routes matched location "/googleredirect?accessToken=xxx?name=xxx */}
<Route path="/googleredirect" element={<LoginRedirect User={user} SetUser={SetUser} /> }/> 

</Routes>
      <Footer />
    </BrowserRouter>
  );
};
export default App;
