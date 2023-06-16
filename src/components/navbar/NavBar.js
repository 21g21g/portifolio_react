import React, { useState } from "react";
import "./NavBar.css";
import { FaAlignJustify } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [show, setShow] = useState(true);
  const showedLinks = () => {
    setShow(!show);
  };
  return (
    <div className="navbar">
      <FaAlignJustify className="shows" onClick={showedLinks} />
      {show && (
        <>
          <Link className="link" to="/">
            Home
          </Link>
          <Link className="link" to="/projects">
            Projects
          </Link>
          <Link className="link" to="/experiances">
            Experiance
          </Link>
        </>
      )}
    </div>
  );
};

export default NavBar;
