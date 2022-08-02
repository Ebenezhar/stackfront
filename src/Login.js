import axios from 'axios';
import { useFormik } from 'formik'
import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { config } from './config';
import UserContext from './UserContext';

function Login() {
    let navigate = useNavigate();
    const userContextData = useContext(UserContext);
    const formik = useFormik(
        {
            initialValues: {
                username: '',
                password: ''
            },
            onSubmit: async (values) => {
                try {
                    let login = await axios.post(`${config.api}/login`, values);
                    if (login.data.token) {
                        localStorage.setItem('react_token', login.data.token);
                        localStorage.setItem('UserName', login.data.name);
                        userContextData.setLoginPerson(login.data.name)
                        navigate('/Portal/Dashboard');
                    } else {
                        alert(login.data.message);
                    }

                } catch (error) {
                    console.log(error);
                }
            }
        }
    )
    return (
        <div className="container">
            {/* Hello world */}
            ;
            {/* Outer Row */}
            <div className="row justify-content-center">
                <div className="col-xl-10 col-lg-12 col-md-9">
                    <div className="card o-hidden border-0 shadow-lg my-5">
                        <div className="card-body p-0">
                            {/* Nested Row within Card Body */}
                            <div className="row">
                                <div className="col-lg-6 d-none d-lg-block bg-login-image" />
                                <div className="col-lg-6">
                                    <div className="p-5">
                                        <div className="text-center">
                                            <h1 className="h4 text-gray-900 mb-4">Welcome to stack overflow</h1>
                                        </div>
                                        <form onSubmit={formik.handleSubmit} className="user">
                                            <div className="form-group">
                                                <input
                                                    type={"text"}
                                                    className="form-control form-control-user mb-2"
                                                    name={'username'}
                                                    value={formik.values.username}
                                                    onChange={formik.handleChange}
                                                    placeholder="Enter User Name..."
                                                />
                                            </div>
                                            <div className="form-group">
                                                <input
                                                    type={"password"}
                                                    className="form-control form-control-user"
                                                    name={'password'}
                                                    onChange={formik.handleChange}
                                                    value={formik.values.password}
                                                    placeholder="Password"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <div className="custom-control custom-checkbox small">
                                                    <input
                                                        type="checkbox"
                                                        className="custom-control-input"
                                                        id="customCheck"
                                                    />
                                                    <label
                                                        className="custom-control-label"
                                                        htmlFor="customCheck"
                                                    >
                                                        Remember Me
                                                    </label>
                                                </div>
                                            </div>
                                            <button
                                                type={"submit"}
                                                className="btn btn-primary mt-2"
                                            >
                                                Login
                                            </button>
                                            <hr />
                                            <a
                                                href="index.html"
                                                className="btn btn-google btn-user btn-block"
                                            >
                                                <i className="fab fa-google fa-fw" /> Login with Google
                                            </a>
                                            <a
                                                href="index.html"
                                                className="btn btn-facebook btn-user btn-block"
                                            >
                                                <i className="fab fa-facebook-f fa-fw" /> Login with
                                                Facebook
                                            </a>
                                        </form>
                                        <hr />
                                        <div className="row">
                                            <Link to='/ForgetPassword'>
                                                Forget Password...!
                                            </Link>
                                            <Link to='/register'>
                                                Create an Account...!
                                            </Link>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login