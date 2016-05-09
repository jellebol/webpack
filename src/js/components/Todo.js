import React from "react";

export default class Todo extends React.Component {
    render() {
        return (
            <li className="todo" key={this.props.key}>{this.props.text}</li>
        )
    }
}