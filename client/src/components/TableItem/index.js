import React, { useContext, useEffect } from "react";
import $ from "jquery";
import MonnaieContext from "../../utils/MonnaieContext";
import API from "../../utils/API";
import DeleteBtn from "../DeleteBtn";
import moment from "moment";

export default function Table() {
    const { globalTasks, setGlobalTasks } = useContext(MonnaieContext);

    useEffect(()=> {
        loadTasks();
    }, [])

    const loadTasks = () => {
        API.getTasks()
        .then(result => {
            setGlobalTasks(result.data);
         })
        .catch(err => console.log(err));
    };

    function handleClick(taskId) {
        var id = taskId;

        const taskCompleted = {
            completed: true};

            $.ajax("/api/tasks/" + id, {
                type: "PUT",
                data: taskCompleted
              }).then(
                function() {
                  console.log("changed Completed to true");
                  // Reload the page to get the updated list
                  window.location.reload();
                }
              );
        }
    
    function deleteTask(id) {
        // console.log(id)
        API.deleteTask(id)
        .then(result => {
            setGlobalTasks([result.data, ...globalTasks]);
            window.location.reload();
        })
    }

    // console.log(globalTasks)

    const currentDate = moment().format("MM/DD/YYYY");

    return (
        <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
            <thead>
                {globalTasks
                .sort(function(a, b) {
                    let c = new Date(a.date);
                    let d = new Date(b.date);
                    return c - d;
                })
                .sort((a, b) => a.completed - b.completed)
                .map(function(task) {
                    let taskColor;
                    let a = moment();
                    let b = new Date(task.date);
                    let dateDiff = (a.diff(b, 'days'));
                    console.log(dateDiff)
                    if (task.date < currentDate) {
                        taskColor = "#FF6961";
                    } else if (dateDiff > -6) {
                        taskColor = "#FDFD96";
                    } else {
                        taskColor = "#94FA92";
                    }
                    let color = taskColor;

                    if (task.completed == false) {
                        return (                            
                            <tr>
                                <th id="completed" data-number={task.completed.length} className="is-flex is-justify-content-space-between is-align-items-center" style={{backgroundColor: color, color: "black", height: '3.2rem'}}>
                                    {task.description}
                                    <div className="is-flex is-align-items-center">
                                        <div>{task.date}</div>
                                        <button className="mx-3" onClick={()=>  handleClick(task._id)}>Complete</button>
                                        <DeleteBtn onClick={() => deleteTask(task._id)} />
                                    </div>
                                </th>
                            </tr>                            
                        )                            
                    } else {
                        return (
                            <tr>
                                <th className="is-flex is-justify-content-space-between is-align-items-center" style={{backgroundColor:'lightGray', color: "black", height: '3rem'}}>
                                    {task.description}
                                    <div className="is-flex is-align-items-center">
                                        <div>{task.date}</div>
                                        <div className="mx-3">Completed</div>
                                        <DeleteBtn onClick={() => deleteTask(task._id)} />  
                                    </div>
                                </th>
                            </tr>
                        )
                    }
                                                    
                    }
                )                     
                }
            </thead>
        </table>
    )
}