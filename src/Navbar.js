import axios from 'axios';
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { config } from './config';
import UserContext from './UserContext';

function Navbar() {
  const userContextData = useContext(UserContext);
  const navigate = useNavigate();

 
  let fetchData = async () => {


    let userData = await axios.get(`${config.api}/userProfile`, {
      headers: {
        'Authorization': `${localStorage.getItem('react_token')}`
      }
    });
    // setlogin(userData.data);
    console.log("U", userData.data);
    userContextData.setLoginPerson(userData.data)
    navigate("/Portal/Profile")
  }
  console.log("A",userContextData.LoginPerson);

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

      <a class="navbar-brand"><i class="fa-brands fa-stack-overflow"></i> Stack<b> overflow</b></a>

      <form className="form-inline row my-2 my-lg-0">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success my-2 my-sm-0 mr-2" type="submit">Search</button>
      </form>
      <div className='row'>
        <button onClick={() => fetchData()}>
          View Profile
        </button>
        <button onClick={() => { doLogout() }}>Logout </button>
      </div>
    </nav>

  )
}



export default Navbar