import React from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../actions/action';
import styles from './container.scss';

import Calculator from '../Components/calculator';

class Container extends React.Component {
    render() {
        return(
            <div className = 'container'>
                <Calculator
                    preview = {this.props.preview}
                    result = {this.props.result}
                    handleClick = {this.props.handleClick}
                    handleDelete = {this.props.handleDelete}
                    handleOperation = {this.props.handleOperation}
                    handleEqual = {this.props.handleEqual} />
                <p className = 'credit'>Coded by Normaly</p>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state
}

export default connect (mapStateToProps, actionCreators)(Container);