import React from "react";
import ReactDom from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Todos from "./pages/Todos";

const app = document.getElementById('app');

ReactDom.render(
    <Router history={hashHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={Home}></IndexRoute>
            <Route path="contact" component={Contact}></Route>
            <Route path="todos" component={Todos}></Route>
        </Route>
    </Router>,
    app
);