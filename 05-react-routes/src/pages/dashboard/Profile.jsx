import React from 'react'
import { Outlet, NavLink } from "react-router-dom";  
import "./Profile.css";

const Profile = () => {
  return (
    <div className="profile-container">
      <nav className="profile-nav">  
        <NavLink to="fans" activeClassName="active">  
          fans  
        </NavLink>  
        <NavLink to="follow" activeClassName="active">  
          follow  
        </NavLink>  
      </nav>  
      <div className="profile-content">
        <Outlet />
      </div>
    </div>
  )
}

export default Profile
