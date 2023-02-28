import { lazy, Suspense, useContext, useEffect } from 'react';

/// Components
import Index from "./jsx";
import { Route, Switch, withRouter } from 'react-router-dom';
// action
/// Style
import "./vendor/bootstrap-select/dist/css/bootstrap-select.min.css";
import "./css/main.css";
import { UserContext } from './context/UserContext';
import Login from './jsx/pages/Login';
import Registration from './jsx/pages/Registration';

function App() {
    const { user } = useContext(UserContext);
    let routes = [
        /// Dashboard
        { url: "", component: Login },
        { url: "signup", component: Registration }
    ];
    if (user != null) {
        return (
            <>
                <Suspense fallback={
                    <div id="preloader">
                        <div className="sk-three-bounce">
                            <div className="sk-child sk-bounce1"></div>
                            <div className="sk-child sk-bounce2"></div>
                            <div className="sk-child sk-bounce3"></div>
                        </div>
                    </div>
                }
                >
                    <Index />
                </Suspense>
            </>
        );

    } else {
        return (
            <div className="vh-100">
                <Suspense fallback={
                    <div id="preloader">
                        <div className="sk-three-bounce">
                            <div className="sk-child sk-bounce1"></div>
                            <div className="sk-child sk-bounce2"></div>
                            <div className="sk-child sk-bounce3"></div>
                        </div>
                    </div>
                }
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
                </Suspense>
            </div>
        );
    }
};

export default App;

