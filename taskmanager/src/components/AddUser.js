import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddUser.css';
import Dashboard from './Dashboard';

function AddUser() {
  useEffect(()=>{
    
    var testID=sessionStorage.getItem("id");
    if(testID>0){
     
      navigate("/AddUser");
    }else
    {
      
      navigate("/");
  
    }
  
     },[]);
    const [Username, setUsername] = useState("");
    const [Password, setPassword] = useState("");
    const [RePassword, setRePassword] = useState("");
    const [Role, setRole] = useState("");

    let navigate = useNavigate();
    


   
    const confirmPass = (e) => {
      
      if(RePassword!==Password){
        alert("password doesnot match")
      }
      
    }


  const insert = () => {
    console.log(Password);
    var dt = '{ "txtUsername": "' + Username + '","txtPassword": "' + Password + '", "txtRole": "' + Role + '"}';
    axios.post('https://b197m7racl.execute-api.us-west-2.amazonaws.com/taskUserInsert', dt)
      .then(function (res) {
        console.log(res.data);
        if (res.data.length!=0) {
          navigate('/User')
        }
        else {
          alert("No response")
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  useEffect(() => {

  }, []);
  

  return (
    <div>
        <Dashboard/>
    <div class="containerAddUser">
       <div class="row"><div class="col-6"><h3>Add new user</h3></div>
       <div class="col-6"> <div class="buttonSave"><button type="button" class="btn btn-success" onClick={insert}>
          Save
        </button></div> </div>
         </div>
            
     
      <div class="row">
        <div class="form-group">
        <div class="col-12">

<label for="FirstName" class="form-label">Username</label>

<input type="text" class="form-control" id="Username" placeholder="Username" value={Username} onChange={e => setUsername(e.target.value)}></input>
</div>

<div class="row g-3">
<div class="col-6">
            <label for="LastName" class="form-label">Password</label>
            <input type="password" class="form-control" id="Password" placeholder="Password"  value={Password}  onChange={e => setPassword(e.target.value)} ></input>
          </div>
        </div>
        <div class="col-6">
          <label for="inputRePassword" class="form-label">Confirm Password</label>
          <input type="password" class="form-control" id="inputRePassword" placeholder=" Confirm Password" value={RePassword}  onChange={e => setRePassword(e.target.value)} onBlur={confirmPass}></input>
        </div>
        </div>

        <div class="col-12">
          <label for="exampleFormControlSelect1">Role</label>
          <select class="form-control" id="exampleFormControlSelect1" value={Role} onChange={e => setRole(e.target.value)} >
          <option>Manager</option>
          <option >Developer</option>
          </select>
          </div>
        </div>
        


      </div>


      </div>


  );
}
export default AddUser;