import React from 'react';
import styles from './calculator.scss';

class Calculator extends React.Component {
    render() {
        return (
            <div className = 'calculator'>
                <div className = 'display'>
                    <div className = 'display-upper'>
                        <p id = 'text-upper'>{this.props.preview}</p>
                    </div>
                    <div className = 'display-lower'>
                        <p id = 'text-lower'>{this.props.result}</p>
                    </div>
                </div>
                <div className = 'button-panel'>
                    <button className = 'clear' onClick = {this.props.handleDelete}>AC</button>
                    <button className = 'divide' onClick = {this.props.handleOperation}>/</button>
                    <button className = 'multiply' onClick = {this.props.handleOperation}>x</button>
                    <button className = 'seven' onClick = {this.props.handleClick}>7</button>
                    <button className = 'eight' onClick = {this.props.handleClick}>8</button>
                    <button className = 'nine' onClick = {this.props.handleClick}>9</button>
                    <button className = 'substract' onClick = {this.props.handleOperation}>-</button>
                    <button className = 'four' onClick = {this.props.handleClick}>4</button>
                    <button className = 'five' onClick = {this.props.handleClick}>5</button>
                    <button className = 'six' onClick = {this.props.handleClick}>6</button>
                    <button className = 'add' onClick = {this.props.handleOperation}>+</button>
                    <div className = 'button-panel-lower'>
                        <div className = 'button-panel-lower-left'>
                            <button className = 'one' onClick = {this.props.handleClick}>1</button>
                            <button className = 'two' onClick = {this.props.handleClick}>2</button>
                            <button className = 'three' onClick = {this.props.handleClick}>3</button>
                            <button className = 'zero' onClick = {this.props.handleClick}>0</button>
                            <button className = 'decimal' onClick = {this.props.handleOperation}>.</button>
                        </div>
                        <button className = 'equals' onClick = {this.props.handleEqual}>=</button>
                    </div>
                </div>

            </div>
        )
    }
}

export default Calculator;