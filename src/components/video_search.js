import React, { Component } from 'react'

 class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }
    render() {

        console.log(this.state);

        return (

                <input
                value = { this.state.term }
                onChange = { (event) => {this.setState({term: event.target.value});this.props.onChangeSearch(this.state.term)}}
                />

        );
    }
}
 export default SearchBar;
