import React from "react";  
import { Outlet, NavLink } from "react-router-dom";  
import { useLocation } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {  
  const location = useLocation();
  const { username } =location.state || {};

  return (  
    <div>  
      <h2>Dashboard</h2>  
      {username && <p>Welcome, {username}!</p>}
      <nav>  
        <NavLink to="profile" activeClassName="active">  
          profile  
        </NavLink>  
        <NavLink to="setting" activeClassName="active">  
          setting  
        </NavLink>  
      </nav>  
      <Outlet />  
    </div>  
  );  
};  

export default Dashboard;