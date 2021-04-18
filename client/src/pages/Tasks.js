import React, { useContext, useEffect } from "react";
import 'bulma/css/bulma.css';
// import "./style.css";
import TaskCardModal from "../components/cardModal";
import { CardsWrap, Card, CardHead, CardBody } from "../components/Cards";
import $ from "jquery";
import Table from "../components/TableItem";
// import DeleteBtn from "../components/DeleteBtn";
import AddBtn from "../components/AddBtn";
import MonnaieContext from "../utils/MonnaieContext";
import API from "../utils/API";
// import IncompleteTable from "../components/TableItem";

// class App extends Component {
//     state = {
//         tasks: JSON.stringify(globalTasks)
//     }
// }

function showTaskForm() {
    console.log("button click");
    $(".modal").addClass("is-active");
}

const TasksList = () => {

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

    let completeTask = globalTasks.filter(task => task.completed == true);
    console.log(completeTask.length)

    return (
        <>
            <CardsWrap>
                <Card custStyle="card mr-2 has-background-primary-light">
                    <CardHead>Total # of Tasks</CardHead>
                    <CardBody>{globalTasks.length}</CardBody>
                </Card>
                <Card custStyle="card ml-2 has-background-info-light">
                    <CardHead># of Tasks Completed</CardHead>
                    <CardBody>{completeTask.length}</CardBody>                    
                </Card>
            </CardsWrap>
            <AddBtn handleClick={showTaskForm}>Add Task</AddBtn>
            <TaskCardModal />
            <Table />
        </>

    )
}

export default TasksList;
