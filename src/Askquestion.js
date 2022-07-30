import React from 'react'
import axios from 'axios'
import { useFormik } from 'formik'
import { config } from './config';

function Askquestion() {
  const formik = useFormik(
    {
      initialValues: {
        topic: '',
        question: '',
      },
      onSubmit: async (values) => {
        try {
          const question = await axios.post(`${config.api}/Askquestion`, values,{
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
    <div className='container'>
      <h5>Ask your Question here</h5>
      <div className='row'>
        <form onSubmit={formik.handleSubmit} >
          <div className='col-lg-12 m-5'>
            <input
              type={"text"}
              className="form-control form-control-user mb-2"
              name={'topic'}
              value={formik.values.topic}
              onChange={formik.handleChange}
              placeholder="Enter topic"
            />
          </div>
          <div className='col-lg-12 m-5'>
            <textarea
              type={"text"}
              rows={"2"} cols={"50"}
              className="form-control form-control-user"
              name={'question'}
              onChange={formik.handleChange}
              value={formik.values.question}
              placeholder="Enter your Question..."
            />
          </div>
          <div className='col-lg-12 m-5'>
            <button
              type={"submit"}
              className="btn btn-primary btn-user btn-block m-2"
            >
              Ask
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Askquestion