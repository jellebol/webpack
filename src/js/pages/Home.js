import React from "react";

import Intro from "../components/Intro";
import Skills from "../components/Skills";

export default class Home extends React.Component{
    constructor(){
        super();
        this.state = {
            title: "Testing"
        }
    }
    changeTitle(title) {
        if (this.isMounted()) this.setState({title})
    }
    render() {
        return (
            <div>
                <Intro changeTitle={this.changeTitle.bind(this)} title={this.state.title}/>
                <Skills />
            </div>
        );
    }
};