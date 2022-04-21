import "bootstrap/dist/css/bootstrap.min.css";
// import "./Sidebar.css";
import "./Dashboard.css";
import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";
const axios = require("axios");

function Dashboard() {
  let navigate = useNavigate();
  
 
   function session() {
    sessionStorage.clear();
  }
  return (
    <div>
      <div class="topnav">
  <a class="active" href="#home">Dashboard</a>
 
 

</div>
<div class="sidenav">
<Link  to="/User">User</Link>

  <Link  to="/AddTask">AddTask</Link>
  <Link  to="/Tasklist">Tasklist</Link>
  <Link  to="/Dnd">Dnd</Link>
  
  <Link to="/" onClick={session}>
          Logout
        </Link>


  
 
</div>
</div>
  );
}

export default Dashboard;