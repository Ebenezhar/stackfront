import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom"

function Navbar() {
    const navigate = useNavigate();
    const doLogout = () => {
        try {
          localStorage.removeItem('react_token');
          navigate('/');
        } catch (error) {
          console.log(error);
        }
      }

    return (
        <nav className="d-flex justify-content-around navbar navbar-expand-lg navbar-light bg-light">

            <a className="navbar-brand" href="#">Stack overflow</a>

            <form className="form-inline row my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success my-2 my-sm-0 mr-2" type="submit">Search</button>
            </form>
            <div className='row'>
                <a className="nav-link" to="/Dashboard/Profile">Profile </a>
                <button onClick={doLogout}>Logout </button>
            </div>



        </nav>

    )
}



export default Navbar