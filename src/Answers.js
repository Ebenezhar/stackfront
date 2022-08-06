import React, { useContext, useEffect, useState } from 'react'
import AnswerCard from './AnswerCard';
import { useFormik } from 'formik'
import axios from 'axios';
import { config } from './config';
import { useParams } from 'react-router-dom';
import UserContext from './UserContext';

function Answers() {
    let quesid = useParams();
    const userContextData = useContext(UserContext);
    
    useEffect(() => {
        fetchData();
    }, [])
    
    let fetchData = async () => {
        let userData = await axios.get(`${config.api}/answers/${quesid.id}`);
        userContextData.setanswers(userData.data);

    }
   
    const formik = useFormik(
        {
            initialValues: {
                answer: '',
            },
            validate: (values) => {
                let errors = {};
                if (!values.answer) {
                    errors.answer = 'Please enter the answer';
                } else if (values.answer.length < 5) {
                    errors.answer = 'Answer should be more than 5 Characters';
                } 
                return errors;
            },
            onSubmit: async (values) => {
                try {
                    console.log(values);
                    const question = await axios.post(`${config.api}/postAnswer/${quesid.id}`, values, {
                        headers: {
                            'Authorization': `${localStorage.getItem('react_token')}`
                        }
                    });
                    alert(question.data.message);
                } catch (error) {
                    console.log(error);
                }
            }
        }
    )

    return (
        <div className=" align-items-start flex-row">
            {/* <h3>Question: {question.question}</h3> */}
            <h5>Answers</h5>
            <div className="card">
                <ul className="list-group">
                    {
                        userContextData.answers.map((answer) => {
                            return (<AnswerCard data={answer} />)
                        })
                    }
                </ul>
            </div>
            <form onSubmit={formik.handleSubmit} >
                <div className="mt-5">
                    <textarea
                        type={"text"}
                        rows={"2"} cols={"50"}
                        className="form-control form-control-user"
                        name={'answer'}
                        onChange={formik.handleChange}
                        value={formik.values.answer}
                        placeholder="Your Answer..."
                    />
                    {
                        formik.errors.answer ? <span style={{ color: 'red' }}> {formik.errors.answer}</span> : null
                    }
                    
                </div>
                <button
                        type={"submit"}
                        className="btn btn-primary btn-user btn-block m-2"
                    >
                        Submit
                    </button>
            </form>


        </div>

    )
}

export default Answers