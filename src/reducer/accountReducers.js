const accountReducers = (state = [], action) => {
    switch (action.type) {
        case "REGISTER":
            return state.push(action.payload)          
        default:
            return state;
    }

}
export default accountReducers;