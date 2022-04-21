import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Dashboard from './Dashboard';
import "./Tasklist.css";

import React, { useEffect, useState, Component } from 'react';

function Tasklist() {

  const [Item, setItem] = useState([]);
  const [countryList, setCountryList] = useState([]);
  const [product, setproduct] = useState(["cycle"]);

  console.log(Item);
  useEffect(() => {
    var oID = sessionStorage.getItem("id");
    var dt = '{"id":' + oID + '}'
    console.log(dt);
    axios.post('https://uur8y8dmqc.execute-api.us-west-2.amazonaws.com/taskfetch', dt)

      // axios.get('https://uur8y8dmqc.execute-api.us-west-2.amazonaws.com/taskfetch')
      .then((res) => {
        // setPosts(res.data.slice(0, 10));
        console.log(res); setItem(res.data);
        // setaddresst(res.data);
      })

  }, []);
  return (<>
    <Dashboard />
    <div class="containerSignup">

      <table class="center">
        <thead>
          <tr>
            <th>Id</th>

            <th>Title</th>

            <th>Owner</th>
            <th>CreatedOn</th>
            <th>status</th>
          </tr>
        </thead>
        <tbody>


          {Item.map((Item, indx) => <tr><td>{Item.id}  </td><td>  {Item.txtTitle}</td>  <td> {Item.txtUsername}</td><td> {Item.dtCreatedOn}</td><td> {Item.txtStatus}</td></tr>)}



        </tbody>
      </table>
    </div>
  </>
  );
}
export default Tasklist;

