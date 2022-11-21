import React, { useState } from "react";
import "../App.css";
import {
  FaHome,
  FaBars,
  FaUserAlt,
  FaCodepen,
  FaCommentAlt,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const menuItem = [
    {
      path: "/",
      name: "Home",
      icon: <FaHome />,
    },
    {
      path: "/projects",
      name: "Projects",
      icon: <FaCodepen />,
    },
    {
      path: "/about",
      name: "About",
      icon: <FaUserAlt />,
    },
    {
      path: "/contact",
      name: "Contact",
      icon: <FaCommentAlt />,
    },
  ];
  return (
    <div className="container">
      <div style={{ width: isOpen ? "100%" : "4%" }} className="sidebar">
        <div className="top_section">
          <h1
            style={{
              display: isOpen ? "block" : "none",
              transition: " all 0.5s",
            }}
            className="logo"
          >
            Menu
          </h1>
          <div
            style={{ marginLeft: isOpen ? "20px" : "-2px" }}
            className="bars"
          >
            <FaBars onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeclassName="active"
          >
            <div className="icon">{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
