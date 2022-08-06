import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { config } from './config';
import UserContext from './UserContext';

function QuestionCard({data}) {
    const [len,setlen] = useState();
    // const userContextData =  UserContext(UserContext);
    // console.log(userContextData.questions);
    let navigate = useNavigate();
    useEffect(() => {
        fetchData();
    }, [])
    let fetchData = async () => {
        let userData = await axios.get(`${config.api}/answers/${data._id}`);
        setlen(userData.data.length);
    }
    const handleView = async (data) => {
        data.view = data.view + 1;
        try {
            await axios.put(`${config.api}/increaseview/${data._id}`,data, {
                headers: {
                  'Authorization': `${localStorage.getItem('react_token')}`
                }
              })
            navigate(`/Portal/Dashboard/Answers/${data._id}`)
        } catch (error) {
            console.log(error);
        }
        
    }
    
    
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{data.question}</h5>
                <p className="card-text">Author: {data.username}</p>
                <p className="card-text">Related to: {data.topic}</p>
                <div className='d-flex justify-content-around'>
                    <div className='d-flex justify-content-start'>
                        <button onClick={() => handleView(data)} className='btn btn-info mr-1'>View Answers</button>
                    </div>
                    <div className='col d-flex justify-content-end'>
                        <p className='m-2'>No of Answers: {len}</p>
                        <p className='m-2'>Views {data.view}</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default QuestionCard