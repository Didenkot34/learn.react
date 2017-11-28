import React, {Component} from 'react';

class IfTrue extends Component {

    render = () =>
        <div>
            <h1> This is True Component</h1>
            <div className="row">
                <a className="btn btn-floating pulse"><i className="material-icons">check</i></a>
            </div>
        </div>
    ;

}

export default IfTrue;