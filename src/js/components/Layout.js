import React from "react";
import { Link } from "react-router";

export default class Layout extends React.Component{
    render() {
        return (
            <div className="container">
                <Link to="/" activeClassName="active">Home</Link>
                <Link to="contact" activeClassName="active">Contact</Link>
                <Link to="todos" activeClassName="active">Todo</Link>
                {this.props.children}
            </div>
        );
    }
};