import React from 'react'
import { useFormik } from 'formik'

function Verification() {
    let formik = useFormik({

    })
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className=" col-lg-5 ">
                    <div className="card o-hidden border-0 shadow-lg my-5 p-3 border bg-light">
                        <h5 className="text-justify mb-3">Enter your Verification Code</h5>
                        <div className="col">
                            <form onSubmit={formik.handleSubmit}>                               
                                <div className="col-lg-10 d-flex justify-content-between">
                                    <div className="row">
                                        <div className="form-group col-lg-10">
                                            <input
                                                type={"text"}
                                                className="form-control form-control-user mb-2"
                                                name={'vercode'}
                                                // value={formik.values.email}
                                                // onChange={formik.handleChange}
                                                placeholder="- - - -"
                                            />
                                            {/* {
                                                formik.errors.email ? <span style={{ color: 'red' }}> {formik.errors.email}</span> : null
                                            } */}
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