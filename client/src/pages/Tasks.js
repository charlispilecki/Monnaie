import React, { useContext, useEffect } from "react";
import 'bulma/css/bulma.css';
// import "./style.css";
import TaskCardModal from "../components/cardModal";
import { CardsWrap, Card, CardHead, CardBody } from "../components/Cards";
import $ from "jquery";
import { IncompleteTable, CompleteTable } from "../components/TableItem";
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

const sampTasks = [
    {
        description: "task1",
        dueDate: "05/01/2021",
        completed: false,
    }, {
        description: "task2",
        dueDate: "05/02/2021",
        completed: false,
    }, {
        description: "task3",
        dueDate: "05/03/2021",
        completed: false,
    }, {
        description: "task4",
        dueDate: "05/01/2021",
        completed: true,
    },
];


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

    console.log(globalTasks)

    return (
        <>
            <CardsWrap>
                <Card custStyle="card mr-2 has-background-primary-light">
                    <CardHead>Total # of Tasks</CardHead>
                    <CardBody>{globalTasks.length}</CardBody>
                </Card>
                {/* <Card custStyle="card ml-2 has-background-info-light">
                    <CardHead># of Tasks Completed</CardHead>
                    <CardBody>{console.log($("#completed").attr("data-number"))}</CardBody>                    
                </Card> */}
            </CardsWrap>
            <AddBtn handleClick={showTaskForm}>Add Task</AddBtn>
            {/* <p>{JSON.stringify(globalTasks)}</p> */}

            <TaskCardModal />
            <IncompleteTable />
            <CompleteTable />
        </>

    )
}

export default TasksList;
