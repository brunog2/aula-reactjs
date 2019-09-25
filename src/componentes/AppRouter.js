import React from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from "./login";
import Home from "./home";

function AppRouter() {
    return (
        <Router> 
            <div>
                <Route path="/" exact component={Login}></Route>
                <Route path="/home" component={Home}></Route>

            </div>

        </Router>
    )
}
export default AppRouter;