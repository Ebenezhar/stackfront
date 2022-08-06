import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { config } from './config';
import UserContext from './UserContext';

function Profile() {
  //let [user,setuser] = useState();
  const userContextData = useContext(UserContext);

  


  return (
    //<div>Welcome</div>
    <div className='d-flex justify-content-center'>
      <div class="card" style={{ width: "25rem" }}>
        <img class="card-img-top" src="https://picsum.photos/200/150" alt="Card image cap"/>
          <div class="card-body">
            <h5 class="card-title">Name: {userContextData.LoginPerson.username}</h5>
            <p class="card-text"><b>Email: </b>{userContextData.LoginPerson.email}</p>
            <p class="card-text"><b>Location: </b>{userContextData.LoginPerson.location}</p>
            <p class="card-text"><b>Profession: </b>{userContextData.LoginPerson.profession}</p>
            <p class="card-text"><b>About: </b>{userContextData.LoginPerson.aboutme}</p>
          </div>
      </div>
    </div>
  )
}

export default Profile