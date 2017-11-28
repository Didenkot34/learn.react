import React from 'react';

class While extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            elements: this.props.elements,
            nameElement: ''
        };
    }

    addNemEl = (event) => {
        event.preventDefault();
        if (!this.state.nameElement) {
            return false;
        }
        let addedElements = this.state.elements;
        addedElements.push(this.state.nameElement);

        this.setState({
            elements: addedElements,
            nameElement: ''
        });

    };

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    };

    deleteRow = (value) => {
        let elements = this.state.elements;
        console.log(value);
        // elements.splice(e.target.id, 1);
        elements = elements.filter(element => element !== value);

        this.setState({
            elements: elements
        });
    };

    render = () => {
        let elements = this.state.elements;
        let i = 0;
        let list = [];
        while (elements.length > i) {
            list.push(
                <li key={i.toString()} className="collection-item">
                    <div> {elements[i]}
                    <a value={elements[i]} onClick={this.deleteRow.bind(this, elements[i])}
                                           href="#!"
                                           className="secondary-content">
                        <i id={elements[i]} className="material-icons">delete</i>
                    </a>
                    </div>
                </li>
            );
            i++
        }

        return (
            <div>

                <form onSubmit={this.addNemEl}>
                    <label>
                        Number of guests: {this.state.elements.length}
                        <input
                            name="nameElement"
                            type="text"
                            value={this.state.nameElement}
                            onChange={this.handleInputChange} />
                    </label>
                    <button type="submit" className="btn-floating btn-large waves-effect waves-light blue" value="Add new Name">
                        <i className="material-icons">add</i>
                    </button>
                </form>

                <ul className="collection">
                    {list}
                </ul>
            </div>
        );
    }
}

export default While;