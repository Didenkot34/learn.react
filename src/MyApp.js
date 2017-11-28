import React, { Component } from  'react';

class MyApp extends React.Component {

    render() {
         return this.props.names.map(function (name) {
             return <h1> Hello, {name} </h1>;
         });
    }

}

export default MyApp;