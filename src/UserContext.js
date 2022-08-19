import { createContext, useState } from "react";


let UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [mailid, setmailid] = useState();
    const [forgotUser, setforgotUser] = useState();
    const [answers, setanswers] = useState([]);
    const [questions, setquestions] = useState([])
    const [LoginPerson, setLoginPerson] = useState([]);
    return (
        <UserContext.Provider value={{ answers, setanswers, questions, setquestions, LoginPerson, setLoginPerson, mailid, setmailid, forgotUser, setforgotUser }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext;