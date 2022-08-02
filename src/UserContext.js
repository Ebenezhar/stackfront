import { createContext, useState } from "react";


let UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [answers, setanswers] = useState([]);
    const [question, setquestion] = useState([])
    const [LoginPerson, setLoginPerson] = useState([]);
    return (
        <UserContext.Provider value={{ answers, setanswers, question, setquestion, LoginPerson, setLoginPerson }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext;