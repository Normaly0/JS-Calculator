export function handleClick(e) {
    return({
        type: 'ADD_VALUE',
        value: e.target.outerText
    });
}

export function handleDelete() {
    return({
        type: 'DELETE',
        value: ''
    })
}

export function handleOperation(e) {
    return({
        type: 'OPERATION',
        value: e.target.outerText
    })
}

export function handleEqual() {
    return({
        type: 'EQUAL'
    })
}