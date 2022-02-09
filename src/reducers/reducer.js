let defaultState = {
    preview: '',
    result: '',
    evaluated: false
}

const ADD_VALUE = 'ADD_VALUE';
const DELETE = 'DELETE';
const OPERATION = 'OPERATION';
const EQUAL = 'EQUAL'

const operators = ['/', 'x', '-', '+']

function maxLength(state) {
    const el = document.getElementById('text-lower')
    let original = state.result
    el.innerText = 'Digital Limit Met'
    setTimeout(() => {
        el.innerText = original
    }, 800)
}

const mainReducer = (state = defaultState, action) => {
    switch(action.type) {
        case ADD_VALUE:
            if (state.evaluated === true) {
            return {
                ...state, 
                preview: action.value,
                result: '',
                evaluated: false
            }
        }   else if(state.preview.length === 32) {
            maxLength(state)
            return {
                ...state
            }
        }
            else {
            return {
                ...state,
                preview: state.preview + action.value
            }
        }
        case DELETE: 
            return {
                ...state,
                preview: action.value,
                result: action.value
            }
        case OPERATION:
            if (state.preview.slice(-1) === action.value | operators.some(el => state.preview.slice(-1).includes(el)) === true | state.preview.length === 0 | state.evaluated === true){
                return {
                    ...state
                }
            }   else if (state.preview.length === 32) {
                maxLength(state)
                return {
                    ...state
                }
            }   else {
                return {
                    ...state,
                    preview: state.preview + action.value
                }
            }
        case EQUAL:
            let expression = state.preview.replace(/x/g, '*')
            let answer = Math.round(1000000000000 * eval(expression)) / 1000000000000;
            return ({
                ...state,
                result: answer,
                evaluated: true
            })
        default:
            return {
                ...state
            }
        }   
}

export default mainReducer;

//32