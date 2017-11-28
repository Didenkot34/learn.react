import React from 'react';

class For extends React.Component {

    htmlCreate = (i) => <h1 key={i.toString()}>{i}</h1>;

    render() {
        let arr = [];
        for (let i = this.props.start; i < this.props.condition; i++) {
           arr.push(i)
        }
        return arr.map(this.htmlCreate);
    }
}

export default For;