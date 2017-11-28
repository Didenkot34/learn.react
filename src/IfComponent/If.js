import React, {Component} from 'react';
import IfTrue from './IfTrue';
import IfFalse from './IfFalse'

class If extends Component {

    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
    }

    toggle = () => {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    };

    toggleButton = () => {
      return (
     <div>
             <a onClick={this.toggle} className="waves-effect waves-light btn">Toggle</a>
     </div>
      );
    };

    render() {



        if (!this.state.isToggleOn) {
            return (
                <div>
                    {this.toggleButton()}
               <IfFalse />
                </div>
            );
        }
        return (
          <div>
              {this.toggleButton()}
              <IfTrue />
          </div>
        );
    }
}

export default If;