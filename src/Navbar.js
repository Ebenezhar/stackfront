import axios from 'axios';
import { useFormik } from 'formik'
import React, { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { config } from './config';
import UserContext from './UserContext';

function Navbar() {
  const userContextData = useContext(UserContext);
  const navigate = useNavigate();

  const waytoHome = () => {
    navigate('/Portal/Dashboard');
  }
  

  const formik = useFormik(
    {
      initialValues: {
        keyword: ""
      },
      // validate: (values) => {
      //   let errors = {};
      //   if (!values.keyword) {
      //     errors.keyword = "Please enter the keyword"
      //   }
      //   return errors;
      // },
      onSubmit: async (values) => {
        if(values){
          try {
            const key = values.keyword;
            let userData = await axios.get(`${config.api}/questions/${key}`,{
              headers: {
                'Authorization': `${localStorage.getItem('react_token')}`
              }
            });
            userContextData.setquestions(userData.data);
          } catch (error) {
            console.log(error);
          } 
        } else {
          let userData = await axios.get(`${config.api}/questions`,{
            headers: {
              'Authorization': `${localStorage.getItem('react_token')}`
            }
          });
          userContextData.setquestions(userData.data);
        }
        
      }
    }
  ) 

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    try {
      let userData = await axios.get(`${config.api}/userProfile`, {
        headers: {
          'Authorization': `${localStorage.getItem('react_token')}`
        }
      });
      userContextData.setLoginPerson(userData.data);
    } catch (error) {
      console.log(error);
    }
  }

  const doLogout = () => {
    if(window.confirm("Do you really want to Logout?")){
      try {
        localStorage.removeItem('react_token');
        navigate('/');
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (

    <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-fixed-top ml-2 mr-2" style={{ backgroundColor: "#e3f2fd !important" }} >
      <div className='col-lg-4 ml-2'>
        <button onClick={() => waytoHome()} className="btn navbar-brand col px-md-4" href="#"><i className="fa-brands fa-stack-overflow"></i> Stack<b> overflow</b></button>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
      <div className='col-lg-4 '>
        <form onSubmit={formik.handleSubmit}>
          <div className='col d-flex justify-content-center'>
            <input
              className="form-control mr-sm-2"
              type="text"
              value={formik.values.keyword}
              onChange={formik.handleChange}
              name={'keyword'}
              placeholder="Search"
              aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0 m-2" type={"submit"}><i className="fa-solid fa-magnifying-glass"></i></button>
          </div>
        </form>
      </div>

      <div className='col-lg-4 '>
        <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <div className="nav-item nav-link" href="#">Welcome <b>{userContextData.LoginPerson.username}</b></div>
            <button className="btn btn-info m-2"><Link to="/Portal/Profile" >View Profile</Link></button>
            <button className="btn btn-outline-danger m-2" onClick={() => { doLogout() }}> <i class="fa-solid fa-arrow-left-from-bracket"></i> Logout </button>
          </div>
        </div>
      </div>
    </nav>
  )
}



export default Navbar