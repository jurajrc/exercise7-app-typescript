type Action = {type: 'OPEN_IS'}

const openNavReducer = (state: boolean = false, action: Action ) => {
    switch(action.type) {
        case 'OPEN_IS':
            return !state;
        default:
            return state;
    }
}

export default openNavReducer