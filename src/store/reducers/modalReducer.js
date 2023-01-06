const defaultModalState = { open: false, content: '' };


function modalReducer(state = defaultModalState, action) {
    switch (action.type) {
        case 'OPEN_MODAL':
            return action.payload
            break;

        case 'CLOSE_MODAL':
            return action.payload;
            break;

        default:
            return state;
            break;
    }
}


export default modalReducer;