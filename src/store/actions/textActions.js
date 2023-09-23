export const updateText = (newText)=>{
    return {
        type: "UPDATE_TEXT",
        payload: newText,
    };
};

export const updateNumber=(newNumber)=>{
    return{
        type: "UPDATE_NUMBER",
        payload: newNumber
    }
}