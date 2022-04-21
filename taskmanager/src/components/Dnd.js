import Dashboard from './Dashboard';
import React, { useEffect, useState, Component } from 'react';
import './dragstyle.css'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
function Dnd() {

 
  let navigate = useNavigate();
  const [taskID, settaskID] = useState();
  const [task, settask] = useState([]);
  const [task1, settask1] = useState([]);
  const [task2, settask2] = useState([]);
  const [task3, settask3] = useState([]);
  const [status, setstatus] = useState();
  useEffect(() => {
    var oID=sessionStorage.getItem("id");
    var dt='{"id":'+oID+'}'
    // console.log(dt);
    axios.post('https://msznqvaree.execute-api.us-west-2.amazonaws.com/tskdashdata',dt)
    // axios.get('https://msznqvaree.execute-api.us-west-2.amazonaws.com/tskdashdata')

      .then((res) => {
        console.log(res.data); settask(res.data);
        console.log(task);
        var pendinglist = [];
        var inprogresslist = [];
        var completedlist = [];


        for (var j = 0; j < task.length; ++j) {

          if (task[j].txtStatus == 'pending' || task[j].txtStatus == null) {
            pendinglist.push(task[j])
          } else if (task[j].txtStatus == 'inprogress') {
            inprogresslist.push(task[j])
          }
          else if (task[j].txtStatus == 'completed') {
            completedlist.push(task[j])
          }

        }
    console.log("pending")
    console.log(pendinglist);
    console.log("inprogress")
    console.log(inprogresslist);
    console.log("completed")
    console.log(completedlist);
    settask1(pendinglist);
    settask2(inprogresslist);
    settask3(completedlist);
      })
    

  }, []);


  const drop = (ev, txt) => {

    setstatus(txt)
    console.log(txt)
    ev.preventDefault();
    if (ev.target.id == "div2") {

      setstatus(txt)
      funcInsert(txt, taskID)
    }
    if (ev.target.id == "div1") {
      setstatus(txt)
      funcInsert(txt, taskID)
    }
    if (ev.target.id == "div3") {
      setstatus(txt)
      funcInsert(txt, taskID)

    }

    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }
  const allowDrop = (e) => {
    e.preventDefault();

  }
  const drag = (ev) => {

    settaskID(ev.target.getAttribute('value'));
    ev.dataTransfer.setData("text", ev.target.id);
  }
  const funcInsert = (txt, taskID) => {
    console.log(txt);
    var stats=txt
    console.log(taskID);
    // var dt = '{ "id": "' + taskID + '" "refTaskOwner":4,}';


    var dt = '{"refTaskId": ' + taskID + ',"txtStatus": "' + stats + '","refOwner":4,"refAssignedTo":1}';
    axios.post('https://bxp84tz63d.execute-api.us-west-2.amazonaws.com/loginsert', dt)
      .then(function (res) {
        console.log(res.data);
        if (res.data.length!=0) {
          // navigate('/Product')
        }
        else {
          alert("No response")
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (<div>
    <Dashboard/>
    <div class="containerDrag">


      <div id="div1" onDrop={(e) => { drop(e, "todo") }} onDragOver={(e) => allowDrop(e)} value="todo" key={task.txtTitle}>
        {task1.map((task, indx) =>
          <div className="mydiv" onDragStart={(e) => drag(e)} value={task.id} draggable="true" id="drag1" width="88" height="31" >{task.txtTitle}</div>
        )}
      </div>

      <div id="div2" onDrop={(e) => { drop(e, "inprogress") }} onDragOver={(e) => allowDrop(e)}  >
        {task2.map((task, indx) =>
          <div className="mydiv" onDragStart={(e) => drag(e)} value={task.id} draggable="true" id="drag1" width="88" height="31" >{task.txtTitle}</div>
        )}

      </div>

      <div id="div3" onDrop={(e) => { drop(e, "completed") }} value="completed" onDragOver={(e) => allowDrop(e)}  >
        {task3.map((task, indx) =>
          <div className="mydiv" onDragStart={(e) => drag(e)} value={task.id} draggable="true" id="drag1" width="88" height="31" >{task.txtTitle}</div>
        )}
      </div>
    </div>

  </div>
  )
}


export default Dnd;