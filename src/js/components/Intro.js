import React from "react";


export default class Intro extends React.Component {
    style(){
        return {
            styleIntro: {
                height: '50vh',
                backgroundColor: 'lightgrey'
            },
            styleTitle: {
                textAlign: 'center',
                marginTop: 0,
                paddingTop: '50px'
            }
        }
    }
    handleChange(e){
        const title = e.target.value;
        this.props.changeTitle(title);
    }
    render() {
        return (
            <div className="intro" style={this.style().styleIntro}>
                <h1 style={this.style().styleTitle}>
                    {this.props.title}
                </h1>
                <input value={this.props.title} onChange={this.handleChange.bind(this)}/>
            </div>
        );
    }
};