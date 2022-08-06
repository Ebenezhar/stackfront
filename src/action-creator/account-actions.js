


export const registerAccount = (person) => {
    return (dispatch) => {
       dispatch({
        type: "REGISTER",
        payload: person,
       })        
    }
}