import React from 'react';

import Input from './Input';
import Textarea from './Textarea';

class Switch extends React.Component {

    render() {

        switch(this.props.formType ) {
            case 'input' :
                return  <Input/> ;
            case 'textarea' :
                return <Textarea />;
            default :
                return <Textarea/>;
        }
    }
}

export default Switch;