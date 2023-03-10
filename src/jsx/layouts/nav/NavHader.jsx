import React, { Fragment, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../../context/ThemeContext";
import logo from "../../../images/logo.png"

const NavHader = () => {
  const [toggle, setToggle] = useState(false);
  const { openMenuToggle } = useContext(
    ThemeContext
  );
  return (
    <div className="nav-header">
      <Link to="/" className="brand-logo">
			<Fragment>
				<img src={logo} width="55" height="55"></img>
				<div className="brand-title">
					<h2 className="">APTS3</h2>
				</div>
			</Fragment>
       
      </Link>

      <div
        className="nav-control"
        onClick={() => {
          setToggle(!toggle);
          openMenuToggle();
        }}
      >
        <div className={`hamburger ${toggle ? "is-active" : ""}`}>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
      </div>
    </div>
  );
};

export default NavHader;
