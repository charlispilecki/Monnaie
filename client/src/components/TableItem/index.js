import React, { useContext, useEffect } from "react";
import $ from "jquery";
import MonnaieContext from "../../utils/MonnaieContext";
import API from "../../utils/API";
import DeleteBtn from "../DeleteBtn";
import Moment from "react-moment";
import moment from "moment";
import TasksList from "../../pages/Tasks";



// console.log(currentDate)

// export default function() {
//     const currentDate = moment().format("MM/DD/YYYY");

//     const { globalTasks, setGlobalTasks } = useContext(MonnaieContext);

//     useEffect(()=> {
//         loadTasks();
//     }, [])

//     const loadTasks = () => {
//         API.getTasks()
//         .then(result => {
//             // console.log(result)
//             setGlobalTasks(result.data);
//          })
//         .catch(err => console.log(err));
//     };

//     // console.log(globalTasks)

//     // const currentDate = <Moment format="MM/DD/YYYY" />

//     return (
//         <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
//                {globalTasks.map(function(task) {
//                 console.log(task)
//                 // let taskColor
//                 // if (task.data.date < currentDate ) {
//                 //     console.log("old date")
//                 //     taskColor = "black"
//                 // }
//                 const taskColor = "color: black";
//                 return (
                    
                    
//                     <IncompleteTable key={task.desc}
//                     task={task}
//                     color={taskColor} />
//                 )  
        
        
                                                
//         }
//     )                        
//     }
//     </table>
//     )

    

// // {
// //     globalTasks.map(function(index) => {
// //         console.log(index)
// //         let taskColor
// //         if (index % 2 === 0) {
// //             // Even rows
// //             taskColor = "#FFB7B2"
// //         } else {
// //             // Odd rows
// //             taskColor = "#FFECF5" 
// //         }
// //         return (  
// //             <IncompleteTable
// //             // setGlobalTasks={setGlobalTasks}
// //             // globalTasks={globalTasks}           
// //             color={taskColor}
// //             />                
// //         )
// //     })
// // }
// }

// const changeTaskColor= (task) => {
//     console.log(task);
//     // let taskColor
//     // if (task.data.date < currentDate ) {
//     //     console.log("old date")
//     //     taskColor = "black"
//     // }
//     var color = "black";
//     IncompleteTable(color);
//     // newTaskColor(color);
// }
// const color = black;

export function IncompleteTable() {

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
        console.log(id)
        API.deleteTask(id)
        .then(result => {
            setGlobalTasks([result.data, ...globalTasks]);
            window.location.reload();
        })
    }

    // const currentDate = moment().format("MM/DD/YYYY");

    // function changeTaskColor(task) {
    //     console.log(task);
    //     let taskColor
    //     if (task.data.date < currentDate ) {
    //         console.log("old date")
    //         taskColor = "black"
    //     }
    //     color = taskColor;
    //     // newTaskColor(color);
    // }
    

    return (
            <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
                <thead>
                    {globalTasks.map(function(task) {
                        // console.log(task);
                        // changeTaskColor(task);
                        // function newTaskColor(color) {
                            if (task.completed == false) {
                            return (
                                <tr>
                                <th id="completed" data-number={task.completed.length} className="is-flex is-justify-content-space-between" style={{backgroundColor: "#FFB7B2", height: '3rem'}}>
                                    {task.description}
                                    <div className="is-flex is-align-items-center">
                                        <div>{task.date}</div>
                                        <button className="mx-3" onClick={()=>  handleClick(task._id)}>Complete</button>
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

export function CompleteTable() {

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

    // const taskState = JSON.stringify(globalTasks);

    // const sortedGlobalTasks = globalTasks.dueDate.sort();

    // console.log(globalTasks.dueDate)

    function deleteTask(id) {
        console.log(id)
        API.deleteTask(id)
        .then(result => {
            setGlobalTasks([result.data, ...globalTasks]);
            window.location.reload();
        })
    }

    return (
            <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
                <thead>
                    {globalTasks.map(function(task) {
                        if (task.completed == true) {
                            return (
                                <tr>
                                <th className="is-flex is-justify-content-space-between" style={{backgroundColor:'lightGray', height: '3rem'}}>
                                    {task.description}
                                    <div className="is-flex is-align-items-center">
                                        <div>{task.date}</div>
                                        <div>Completed</div>
                                        <DeleteBtn onClick={() => deleteTask(task._id)} />
                                        {/* task.completed.length    */}
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
