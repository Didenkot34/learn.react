import React, {Component} from 'react';

class IfFalse extends Component {

    render() {

        return (
            <div>
            <h1> This is False Component</h1>
                <div className="row">
                    <a className="btn btn-floating pulse red darken-1"><i className="material-icons">error_outline</i></a>
                </div>
            </div>

    );
    }
}

export default IfFalse;