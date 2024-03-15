// Home.js
import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";// Import Footer component
import "./css/home.css";

export default function Home() {
  return (
    <>
      <div id="navbar">
        <div id="logo">
          <h1>TWITTER</h1>
        </div>

        <div id="links">
          <Link to="/">Home</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/about">About</Link>
          <Link to="/login">Login/SignUp</Link>
        </div>
      </div>
      <div id ="login">
      <h1> LOGIN/SIGNUP TO SEE POSTS</h1>
      </div>
      
      <Footer /> {/* Render Footer component */}
    </>
  );
}
