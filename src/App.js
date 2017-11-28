import React, {Component} from 'react';
import './App.css';
import If from './IfComponent/If';
import Switch from './SwitchComponent/Switch';
import For from './ForComponent/For'
import While from './WhileComponent/While';


class App extends Component {

    constructor(props) {
        super(props);
        //init default component
        this.state = {
            component: <If/>
        };
    }

    /**
     * Get All Components
     * @returns {Map}
     */
     components = () => {

         return new Map([
             ['componentIf',   <If expression={false}/>],
             ['componentFor', <For start={0} condition={3}/>],
             ['componentSwitch',   <Switch formType="input"/>],
             ['componentWhile',   <While elements={['Yura', 'Petya']}/>],
         ]);

    };

    /**
     * The component that we need to show
     * example : type = componentFor;
     * @param type
     */
    showComponent = (type) => {
        const components = this.components();
        this.setState({component: components.get(type)});
    };

    /**
     * Navigation panel
     */
    getNav = () =>
        <div>
            <nav>
                <div className="nav-wrapper">
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li onClick={this.showComponent.bind(this, 'componentIf')} ><a>Component IF</a></li>
                        <li onClick={this.showComponent.bind(this, 'componentFor')}  ><a value="componentFor">Component FOR</a></li>
                        <li onClick={this.showComponent.bind(this, 'componentSwitch')}  ><a>Component SWITCH</a></li>
                        <li onClick={this.showComponent.bind(this, 'componentWhile')}  ><a>Component WHILE</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    ;

    render() {

        return (

            <div className="App">
                {this.getNav()}
                <div className="container">
                    {this.state.component}
                </div>
            </div>

        );
    }
}

export default App;
