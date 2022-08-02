import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { config } from './config';
import UserContext from './UserContext';

function Profile() {
  const userContextData = useContext(UserContext);
  console.log(userContextData.LoginPerson);
   
  
    return (
    <div>Welcome</div>
    // <div className='d-flex justify-content-center'>
    //   <div class="card" style={{ width: "25rem" }}>
    //     <img class="card-img-top" src="https://picsum.photos/200/150" alt="Card image cap"/>
    //       <div class="card-body">
    //         <h5 class="card-title">Name: {login.username}</h5>
    //         <p class="card-text"><b>Email: </b>{login.email}</p>
    //         <p class="card-text"><b>Location: </b>{login.location}</p>
    //         <p class="card-text"><b>Profession: </b>{login.profession}</p>
    //         <p class="card-text"><b>About: </b>{login.aboutme}</p>
    //       </div>
    //   </div>
    // </div>
  )
}

export default Profile