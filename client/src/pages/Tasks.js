import React from "react";
import 'bulma/css/bulma.css';
// import "./style.css";
import TaskCardModal from "../components/cardModal";
// import Header  from "../components/Header";
// import Navbar from "../components/Navbar";
import { CardsWrap, Card, CardHead, CardBody } from "../components/Cards";
import $ from "jquery";

import Table from "../components/TableItem";
// import { Table, TableRow, TableHead, TableHeader } from "../components/TableItem";
// import DeleteBtn from "../components/DeleteBtn";
import AddBtn from "../components/AddBtn";

// class App extends Component {
//     state = {
//         tasks: [{}]
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

const test1 = {
    description: "test1",
    dueDate: "05/01/2021"
}

const test2 = {
    description: "test2",
    dueDate: "04/01/2021"
}


const TasksList = () => {

    return (
        <>
        <CardsWrap>
            <Card custStyle="card mr-2 has-background-primary-light">
                <CardHead>Total # of Tasks</CardHead>
                <CardBody>Body1</CardBody>
            </Card>
            <Card custStyle="card ml-2 has-background-info-light">
                <CardHead># of Tasks Completed</CardHead>
                <CardBody>Body2</CardBody>
            </Card>
        </CardsWrap>
        <AddBtn handleClick={showTaskForm}>Add Task</AddBtn>
        <TaskCardModal/>
        <Table>test1</Table>
        <Table></Table>
        <Table></Table>
        </>

    )
}

export default TasksList;
