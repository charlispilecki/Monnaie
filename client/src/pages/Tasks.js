import React from "react";
import 'bulma/css/bulma.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import "./style.css";
import CardModal from "../components/cardModal";
// import Header  from "../components/Header";
// import Navbar from "../components/Navbar";
import { CardsWrap, Card, CardHead, CardBody } from "../components/Cards";
import $ from "jquery";

// import Table from "../components/TableItem";
// import { Table, TableHead, TableHeader } from "../components/TableItem";
// import DeleteBtn from "../components/DeleteBtn";
import AddBtn from "../components/AddBtn";

function showTaskForm() {
    console.log("button click");
    $(".modal").addClass("is-active");
}

function handleClick() {
    
    showTaskForm();
}

// $(".addTask").onclick = function() {console.log("button pushed")};

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
        <CardModal />
        {/* <Table>
            <TableHead>
                <TableHeader></TableHeader>
            </TableHead>
        </Table>         */}
        </>

    )
}

export default TasksList;
