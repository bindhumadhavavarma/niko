/// Menu
import Metismenu from "metismenujs";
import React, { Component, useContext, useEffect } from "react";
/// Scroll
import PerfectScrollbar from "react-perfect-scrollbar";
/// Link
import { Link } from "react-router-dom";
//import { Dropdown } from "react-bootstrap";
import useScrollPosition from "use-scroll-position";
import { ThemeContext } from "../../../context/ThemeContext";
import { UserContext } from "../../../context/UserContext";
//import LogoutPage from './Logout';



class MM extends Component {
  componentDidMount() {
    this.$el = this.el;
    this.mm = new Metismenu(this.$el);
  }
  componentWillUnmount() {
  }
  render() {
    return (
      <div className="mm-wrapper">
        <ul className="metismenu" ref={(el) => (this.el = el)}>
          {this.props.children}
        </ul>
      </div>
    );
  }
}

const SideBar = () => {
  const {
    iconHover,
    sidebarposition,
    headerposition,
    sidebarLayout,
  } = useContext(ThemeContext);

  let scrollPosition = useScrollPosition();
  /// Path
  let path = window.location.pathname;
  path = path.split("/");
  path = path[path.length - 1];
  /// Active menu
  let home = [""]
  let deshBoard = ["dashboard"]
  let Departments = ["manage-departments","department-wise-reports"]
  let Companies = ["companies"]

  const { movieSelected, movieSelectedCheck } = useContext(UserContext);

  useEffect(() => {
    var btn = document.querySelector(".nav-control");
    var aaa = document.querySelector("#main-wrapper");
    function toggleFunc() {
      return aaa.classList.toggle("menu-toggle");
    }
    btn.addEventListener("click", toggleFunc);
    movieSelectedCheck();
    //sidebar icon Heart blast

  }, []);
  return (
    <div
      className={`dlabnav ${iconHover} ${sidebarposition.value === "fixed" &&
        sidebarLayout.value === "horizontal" &&
        headerposition.value === "static"
        ? scrollPosition > 120
          ? "fixed"
          : ""
        : ""
        }`}
    >
      <PerfectScrollbar className="dlabnav-scroll">

        <MM className="metismenu" id="menu">
          <li className={`${home.includes(path) ? "mm-active" : ""}`}>
            <Link to="/" className="ai-icon" >
              <i style={{ width: "25px" }} className="fas fa-home"></i>
              <span className="nav-text">Home</span>
            </Link>
          </li>
          <li className={`${deshBoard.includes(path) ? "mm-active" : ""}`}>
            <Link to="#" className="has-arrow ai-icon" >
              <i style={{ width: "25px" }} className="fas fa-columns"></i>
              <span className="nav-text">Transactions</span>
            </Link>
            <ul >
              <li><Link className={`${path === "add-transaction" ? "mm-active" : ""}`} to="/add-transaction">Add Transaction</Link></li>
              <li><Link className={`${path === "view-transactions" ? "mm-active" : ""}`} to="/view-transactions">View Transactions</Link></li>
              <li><Link className={`${path === "review-transactions" ? "mm-active" : ""}`} to="/review-transactions">Review Transactions</Link></li>
            </ul>
          </li>
          <li className={`${Departments.includes(path) ? "mm-active" : ""}`}>
            <Link to="#" className="has-arrow ai-icon" >
              <i style={{ width: "25px" }} className="fas fa-dollar-sign"></i>
              <span className="nav-text">Departments</span>
            </Link>
            <ul >
              <li><Link className={`${path === "manage-departments" ? "mm-active" : ""}`} to="/manage-departments">Manage Departments</Link></li>
              <li><Link className={`${path === "department-wise-reports" ? "mm-active" : ""}`} to="/department-wise-reports">Department Reports</Link></li>
            </ul>
          </li>
          <li className={`${Companies.includes(path) ? "mm-active" : ""}`}>
            <Link to="/companies" className="ai-icon" >
            <i style={{width:"25px"}} className="fas fa-building"></i>
              <span className="nav-text">Companies</span>
            </Link>
          </li>
        </MM>
        <div className="copyright" style={{ "bottom": "0" }}>
          <p><strong>APTS</strong> ?? 2023 All Rights Reserved</p>
        </div>
      </PerfectScrollbar>
    </div>
  );
};

export default SideBar;
