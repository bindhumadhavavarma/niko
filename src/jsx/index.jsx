import React, { useContext, useEffect } from "react";

/// React router dom
import { Switch, Route } from "react-router-dom";

/// Css
import "./index.css";
import "./chart.css";
import "./step.css";

/// Layout
import Nav from "./layouts/nav";
import Footer from "./layouts/Footer";
/// Dashboard

/// Widget
///Accounts
import { ThemeContext } from "../context/ThemeContext";
import Messages from "./components/Chat/Messages";
const Markup = () => {
  const { menuToggle } = useContext(ThemeContext);
  let routes = [
    /// Dashboard
    { url: "", component: Messages }
  ];

  let path = window.location.pathname;
  path = path.split("/");
  path = path[path.length - 1];

  routes = [
    /// Dashboard
    { url: "", component: Messages },
  ];

  let pagePath = path.split("-").includes("page");
  return (
    <>
      <div
        id="main-wrapper"
        className={`${menuToggle ? "show menu-toggle" : "show"
          }`}
      >

        <div className="content-body">
          <div
            className="container-fluid"

          >

            <Switch>
              {routes.map((data, i) => (
                <Route
                  key={i}
                  exact
                  path={`/${data.url}`}
                  component={data.component}
                />
              ))}
            </Switch>
          </div>
        </div>
      </div>
    </>
  );
};

export default Markup;
