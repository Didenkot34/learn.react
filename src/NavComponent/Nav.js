import React, {Component} from 'react';

class Nav extends Component {

    constructor(props) {
        super(props);
        const components ={
            ifComponent: true,
            forComponent: false,
            switchComponent: false,
            whileComponent: false,
        }
        this.state = components;
    }

    showComponent = (component) => {
        this.setState(prevState => ({
            touchHistory: !prevState.isToggleOn
        }));
    };

    render() {
        return (
            <div>
                <nav>
                    <div className="nav-wrapper">
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li className="active"><a href="#">Component IF</a></li>
                            <li><a href="#">Component FOR</a></li>
                            <li><a href="#">Component SWITCH</a></li>
                            <li><a href="#">Component WHILE</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Nav;
