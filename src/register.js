import axios from 'axios'
import { useFormik } from 'formik'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { actionCreators } from './action-creator';
import { config } from './config';
import {bindActionCreators} from 'redux';


function Register() {
    const account = useSelector(state => state.account);
    
    const dispatch = useDispatch();
    // const { registerAccount } = bindActionCreators(actionCreators, dispatch);
    // registerAccount(values);
    const formik = useFormik(
        {
            initialValues: {
                username: '',
                email: '',
                location: '',
                aboutme: '',
                profession: '',
                password1: '',
                password2: '',
            },
            validate: (values) => {
                let errors = {};
                let pattern = new RegExp(/^[a-zA-Z\-]+$/)
                if (!values.username) {
                    errors.username = 'Please enter the name';
                } else if (values.username.length < 5) {
                    errors.username = 'Length should be more than 5 Characters';
                } else if (values.username.length > 20) {
                    errors.username = 'Length should be less than 20 Characters';
                } else if (!pattern.test(formik.values.username)) {
                    errors.username = "Enter the valid Name";
                }

                if (!values.email) {
                    errors.email = 'Please enter your email address'
                }
                if (!values.location) {
                    errors.location = 'Please enter the age'
                }
                if (!values.aboutme) {
                    errors.aboutme = 'Please enter about yourself'
                } else if (values.aboutme.length < 10) {
                    errors.aboutme = 'Length should be more than 10 Characters';
                }
                if (!values.profession) {
                    errors.profession = 'Please enter your profession'
                }
                if (!values.password1) {
                    errors.salary = 'Please enter the password'
                } else if (values.password1.length < 8) {
                    errors.password1 = 'Length should be more than 8 Characters';
                }
                if (!values.password2) {
                    errors.password2 = 'Please enter the password'
                } else if (values.password1 != values.password2) {
                    errors.password2 = 'Password does not match'
                }
                return errors
            },
            onSubmit: async (values) => {
                try {
                    const register = await axios.post(`${config.api}/register`, values);
                    alert(register.data.message);
                } catch (error) {
                    console.log(error);
                }
            }
        }
    )
    return (
        <div className="container">
            <div className="text-center">
                <h1 className="h4 text-gray-900 mb-4">Register here</h1>
            </div>
            <form onSubmit={formik.handleSubmit}>
                <div className='row'>
                    <div className='col-lg-6'>
                        <div className="form-group">
                            <input
                                type={"text"}
                                className="form-control form-control-user mb-2"
                                name={'username'}
                                value={formik.values.username}
                                onChange={formik.handleChange}
                                placeholder="Enter your name"
                            />
                            {
                                formik.errors.username ? <span style={{ color: 'red' }}> {formik.errors.username}</span> : null
                            }
                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <div className="form-group">
                            <input
                                type={"text"}
                                className="form-control form-control-user mb-2"
                                name={'email'}
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                placeholder="Enter Email Address..."
                            />
                            {
                                formik.errors.email ? <span style={{ color: 'red' }}> {formik.errors.email}</span> : null
                            }
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-group">
                            <input
                                type={"text"}
                                className="form-control form-control-user"
                                name={'imageurl'}
                                // onChange={formik.handleChange}
                                // value={formik.values.imageurl}
                                placeholder="Enter image url"
                            />
                        </div>
                    </div>
                    <div className="col-lg-6 mt-2">
                        <div className="form-group">
                            <input
                                type={"text"}
                                className="form-control form-control-user"
                                name={'location'}
                                onChange={formik.handleChange}
                                value={formik.values.location}
                                placeholder="Enter your Location"
                            />
                            {
                                formik.errors.location ? <span style={{ color: 'red' }}> {formik.errors.location}</span> : null
                            }
                        </div>
                    </div>
                    <div className="col-lg-6 mt-2">
                        <div className="form-group">
                            <textarea
                                type={"text"}
                                rows={"2"} cols={"50"}
                                className="form-control form-control-user"
                                name={'aboutme'}
                                onChange={formik.handleChange}
                                value={formik.values.aboutme}
                                placeholder="Tell us about yourself..."
                            />
                            {
                                formik.errors.aboutme ? <span style={{ color: 'red' }}> {formik.errors.aboutme}</span> : null
                            }
                        </div>
                    </div>

                    <div className="col-lg-6 mt-2">
                        <div className="form-group">
                            <input
                                type={"text"}
                                className="form-control form-control-user"
                                name={'profession'}
                                onChange={formik.handleChange}
                                value={formik.values.profession}
                                placeholder="Enter your profession"
                            />
                            {
                                formik.errors.profession ? <span style={{ color: 'red' }}> {formik.errors.profession}</span> : null
                            }
                        </div>
                    </div>
                    <div className="col-lg-6 mt-2">
                        <div className="form-group">
                            <input
                                type={"text"}
                                className="form-control form-control-user"
                                name={'password1'}
                                onChange={formik.handleChange}
                                value={formik.values.password1}
                                placeholder="Enter Password"
                            />
                            {
                                formik.errors.password1 ? <span style={{ color: 'red' }}> {formik.errors.password1}</span> : null
                            }
                        </div>
                    </div>
                    <div className="col-lg-6 mt-2">
                        <div className="form-group">
                            <input
                                type={"text"}
                                className="form-control form-control-user"
                                name={'password2'}
                                onChange={formik.handleChange}
                                value={formik.values.password2}
                                placeholder="Confirm Password"
                            />
                            {
                                formik.errors.password2 ? <span style={{ color: 'red' }}> {formik.errors.password2}</span> : null
                            }
                        </div>
                    </div>

                    <div className='col-lg-6 mt-2'>
                        <button
                            to="/Login"
                            type={"submit"}
                            className="btn btn-primary btn-user btn-block m-2"
                        >
                            Register
                        </button>
                    </div>
                    <Link to='/'>
                        Already have account
                    </Link>

                </div>
            </form>



        </div>

    )
}

export default Register