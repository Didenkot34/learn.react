import React, {Component} from 'react';

class Clock extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: new Date(),
            names: ['Kate', 'Mike', 'Yura'].map(name => <h1>{name}</h1>),
            nameNew : ''
        };
    }

    componentDidMount() {

        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            data: new Date()
        })
    }

    setName = (e) => {
        this.setState({nameNew: e.target.value});
    }

    render() {
        return (
            <div>
                <h1>Hello , world</h1>
                <h2> It's {this.state.data.toLocaleTimeString()}</h2>
                <div> {this.state.names}</div>
                <input onKeyPress={this.setName} type="text"/>
                <h3>{this.state.nameNew}</h3>
            </div>
        );
    }


}

export default Clock;