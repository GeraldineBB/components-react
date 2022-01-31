import PropTypes from 'prop-types';
import React from 'react';

class ClassNoApi extends React.Component {

    constructor(props) {
        super(props); 
        this.title = props.title; 
    }

    handleClick = () => {
        console.log ('class sans api', this.title); 
    }

    render () {
        return (
            <button onClick={this.handleClick}> clique pour voir la console</button>
        )
    }




}

ClassNoApi.propTypes = {
    title: PropTypes.string.isRequired, 
}

export default ClassNoApi; 