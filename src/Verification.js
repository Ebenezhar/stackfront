import React, { useContext } from 'react'
import { useFormik } from 'formik'
import axios from 'axios';
import UserContext from './UserContext';
import { config } from './config';
import { useNavigate } from 'react-router-dom';

function Verification() {
    let navigate = useNavigate();
    const userContextData = useContext(UserContext);
    let mail = userContextData.mailid;
    let formik = useFormik({
        initialValues: {
            email: `${mail}`,
            vercode: '',
        },
        validate: (values) => {
            let errors = {};
            if (!values.vercode) {
                errors.vercode = "Please enter the validation code";
            }
            return errors;
        },
        onSubmit: async (values) => {
            console.log(values);
            try {
                const res = await axios.post(`${config.api}/verify`, values);
                userContextData.setforgotUser(res.data);
                console.log(res.data);
                if (res.data) {
                    alert("Verified ✅");
                    navigate('/ChangePassword');
                }
                else {
                    alert(res.data.message);
                }
            } catch (error) {
                console.log(error);
                alert(`${error.response.data.message}`);
            }
        }
    })
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className=" col-lg-5 ">
                    <div className="card o-hidden border-0 shadow-lg my-5 p-3 border bg-light">
                        <h5 className="text-justify mb-3">Enter your Verification Code</h5>
                        <div className="col">
                            <h6 className='pb-3 pt-3'>Mailid: {mail}</h6>
                            <form onSubmit={formik.handleSubmit}>
                                <div className="col-lg-10 d-flex justify-content-between">
                                    <div className="row">
                                        <div className="form-group col-lg-10">
                                            <input
                                                type={"number"}
                                                className="form-control form-control-user mb-2"
                                                name={'vercode'}
                                                value={formik.values.vercode}
                                                onChange={formik.handleChange}
                                                placeholder="- - - -"
                                            />
                                            {
                                                formik.errors.vercode ? <span style={{ color: 'red' }}> {formik.errors.vercode}</span> : null
                                            }
                                        </div>
                                        <div className='col-lg-2'>
                                            <button className='btn btn-success'>verify</button>
                                        </div>
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

export default Verification