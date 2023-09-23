const initalState = {
    text : "Old Text", //Initial state for the text
    number: 0,
}

const textReducer = (state = initalState,action) =>{
    switch(action.type){
        case 'UPDATE_TEXT':
            return {...state,text: action.payload};
        case 'UPDATE_NUMBER':
            return{...state,number: action.payload}
            default:
                return state;
    }
}

export default textReducer;