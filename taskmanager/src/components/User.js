import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "./User.css";
import { Link } from "react-router-dom";
// import Dashboard from "./MyDashboard";
import Dashboard from './Dashboard';
function User() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios
      .get(
        " https://jyd4p1svbb.execute-api.us-west-2.amazonaws.com/userlistfetch"
      )
      .then((resp) => {
        console.log(resp.data);
        setUser(resp.data);
      });
  }, []);
  return (
    <div>
        <Dashboard />
    <div class="UserList">
      <h4>User List</h4>
      <Link to="/AddUser">
        <div class="buttonAddUser">
        <button type="button" class="btn btn-success">
          Add User
        </button></div>
      </Link>
      <div className="AppUser">
        <table>
          <tr> 
            <th>Id</th>
            <th>Username</th>
            <th>Role</th>
            <th>Date Created On</th>
            <th>Date Updated On</th>
            <th>Delete Flag</th>
          </tr>
          {user.map((val, key) => {
            return (
              <tr key={key}>
                <td>{val.id}</td>
                <td>{val.txtUsername}</td>

                <td>{val.txtRole}</td>
                <td>{val.dtCreatedOn}</td>
                <td>{val.dtUpdatedOn}</td>
                <td>{val.bDeleteFlag}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
    </div>
  );
}
export default User;