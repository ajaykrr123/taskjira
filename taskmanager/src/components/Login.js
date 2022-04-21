import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";
function Login() {
  const [UserName, setUserName] = useState([]);
  const [password, setpassword] = useState([]);
  let navigate = useNavigate();
  const loginclick = () => {
    sessionStorage.setItem("Password", password);

    var dt =
      '{   "txtUsername": "' +
      UserName +
      '",     "txtPassword":"' +
      password +
      '"  }';
    axios
      .post(
        "https://ml68u29qv6.execute-api.us-west-2.amazonaws.com/tasklogin",
        dt
      )
      .then(function (res) {
        console.log(res.data[0].id);
        if (res.data.length) {
          sessionStorage.setItem("id", res.data[0].id);
          sessionStorage.getItem("id");
          navigate("/Dashboard");
        } else {
          alert("Error in username or password");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(() => {}, []);

  return (
    <div class="bg">
      <div class="containerLogin">
        <form class="row g-3">
          <h4>Login</h4>
          <div class="col-md-12">
            <label for="inputUsername" class="form-label">
              Username
            </label>
            <input
              type="text"
              class="form-control"
              id="inputUsername"
              placeholder="Username"
              value={UserName}
              onChange={(e) => setUserName(e.target.value)}
            ></input>
          </div>

          <div class="col-md-12">
            <label for="inputPassword4" class="form-label">
              Password
            </label>
            <input
              type="Password"
              class="form-control"
              id="inputPassword"
              placeholder="Password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            ></input>
          </div>

          <div class="col-md-6">
            <button type="button" class="btn btn-success" onClick={loginclick}>
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;