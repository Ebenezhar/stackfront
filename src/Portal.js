import React from 'react'
import Navbar from './Navbar'
import {
  Outlet,
} from "react-router-dom";

function Portal() {

  return (
    <div className="col-lg-12">
      <Navbar />
      <div className="container-fluid">
        <Outlet />
      </div>
    </div>

  )

}

export default Portal