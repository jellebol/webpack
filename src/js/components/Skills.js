import React from "react";

class Skill extends React.Component {
    render() {
        return (
            <div className="skill">
                <h2>{this.props.skill.name}</h2>
                <p>{this.props.skill.level}</p>
                <ul>
                    {this.props.skill.details.map((listValue, i) => {
                        return <li className="skill-detail" key={i}>{listValue}</li>;
                    })}
                </ul>
            </div>
        )
    }
}

export default class Skills extends React.Component {
    constructor() {
        super();
        this.state = {
            skills: [
                {
                    name: 'Developer',
                    level: 1,
                    details:['HTML5', 'CSS3', 'AngularJS', 'React', 'JetBrains']
                },
                {
                    name: 'Designer',
                    level: 1,
                    details: ['Adobe Photoshop', 'Adobe Illustrator', 'Dribble']
                },
                {
                    name: 'Photographer',
                    level: 1,
                    details: ['Canon EOS 600D', 'Plastic Fantastic 50mm', 'Olympus OM10', 'Adobe Lightroom']
                }
            ]
        }
    }
    getSkills() {
        return (
            this.state.skills.map((el, i) => {
                return <Skill key={i} skill={el} />
            })
        )
    }
    render() {
        setTimeout(() => {
            this.state.skills[0].level = 3;
            this.state.skills[1].level = 2;
            this.setState(this.state);
        }, 1000);

        return (
            <ul className="skills">
                {this.getSkills()}
            </ul>
        );
    }
};