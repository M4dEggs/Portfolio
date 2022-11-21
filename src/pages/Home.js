import React from "react";
import { Router, Link } from "react-router-dom";
import { Styles } from "../style/home.css";
import { FaFacebook, FaYoutube } from "react-icons/fa";
const Home = () => {
  return (
    <div className="home-page">
      <div className="header-box" id="header-box">
        <h1 className="header-text-1">HI,</h1>
        <h1 className="header-text-2">
          I am studying
          <span className="header-text-2-1"> web development.</span>
        </h1>
        <p className="p-text-1">
          <span className="p-text-1-1">
            This is a simple portfolio website that I am working on
          </span>
          . Lorem Ipsum has been the industry's standard dummy text ever since
          the 1500s, when an unknown printer took a galley of type and scrambled
          it to make a type specimen book. It has survived not only five
          centuries, but also the leap into electronic typesetting, remaining
          essentially unchanged.
        </p>

        <Link to="/about">
          <button className="btn-aboutme">ABOUT ME</button>
        </Link>
        <Link to="/contact">
          <button className="btn-contact">CONTACT</button>
        </Link>
        <div className="home-icon">
          <a
            href="https://www.facebook.com/profile.php?id=100013619671310"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="facebook-icon" />
          </a>
          <a
            href="https://www.youtube.com/channel/UCpGo8I-_llLHUw25KOjdymg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube className="youtube-icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
