import React, {useEffect, useState} from 'react';
import history from '../history';
import {useDispatch, useSelector} from 'react-redux';
import '../css/Profile.css'
import avatar from  '../images/profile-avatar.jpg';

function ProfileNavComp(props) 
{
    const [name, setName] = useState("Alon");
    
    return (   
        <div className="container">
            <img class="avatar" src={avatar} alt="profile picture" />
	  		Hello {name}
        </div>
  );
}
export default ProfileNavComp;