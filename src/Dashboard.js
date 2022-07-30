import React, { useEffect, useState } from 'react'
import QuestionCard from './QuestionCard'
import { Link } from "react-router-dom";
import axios from 'axios';
import { config } from './config';

function Dashboard() {
    const [questions, setquestions] = useState([])
    useEffect(() => {
        fetchData();
    }, [])
    let fetchData = async () => {
        let userData = await axios.get(`${config.api}/questions`);
        setquestions(userData.data);
    }
    return (
        <>
            <div className="col d-flex justify-content-between">
                <h3> Questions</h3>
                <Link to="/Portal/Dashboard/Askquestion" className="btn btn-primary m-2">Ask Questions</Link>
            </div>
            <ul className="list-group">
                <li>
                    {
                        questions.map((question) => {
                            return (<QuestionCard data={question} />)
                        })
                    }
                </li>
            </ul>
        </>



    )
}

export default Dashboard