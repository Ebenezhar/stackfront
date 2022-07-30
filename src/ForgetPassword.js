import React from 'react'
import { useFormik } from 'formik'
import axios from 'axios';
import { config } from './config';
import { useNavigate } from "react-router-dom";

function ForgetPassword() {
    let navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            email: '',
        },
        onSubmit: async (values) => {
            console.log(values);
            try {
                let mail = await axios.post(`${config.api}/sendmail`, values);
                console.log(mail.data.message);
                if (mail.data) {
                    alert("ser found");
                    // navigate('/ResetPassword');
                } else {
                    alert(mail.data.message);
                }

            } catch (error) {
                console.log(error);
            }
        }

    })

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className=" col-lg-5 ">
                    <div className="card o-hidden border-0 shadow-lg my-5 p-3 border bg-light">
                        <h5 className="text-justify">Forget password</h5>
                        <div className="col">
                            <form onSubmit={formik.handleSubmit}>
                                <div className="col-lg-12 d-flex justify-content-between">
                                    <div className='col-lg-6'>
                                        <div className="form-group">
                                            <input
                                                type={"text"}
                                                className="form-control form-control-user mb-2"
                                                name={'email'}
                                                value={formik.values.email}
                                                onChange={formik.handleChange}
                                                placeholder="Enter your Email Address..."
                                            />
                                            {
                                                formik.errors.email ? <span style={{ color: 'red' }}> {formik.errors.email}</span> : null
                                            }
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <button className='btn btn-info'
                                            type={"submit"}
                                        >
                                            Send verification
                                        </button>
                                       
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForgetPassword