import React from "react";
import 'bulma/css/bulma.css';
import Header  from "../components/Header";
import Navbar from "../components/Navbar";
import { CardsWrap, Card, CardHead, CardBody } from "../components/Cards";
import { Table, TableHead, TableHeader } from "../components/TableItem";
// import DeleteBtn from "../components/DeleteBtn";
import AddBtn from "../components/AddBtn";



const TasksList = () => {

    return (
        <>
        <Header />
        <Navbar />
        <CardsWrap>
            <Card custStyle="card mr-2 has-background-primary-light">
                <CardHead>Head1</CardHead>
                <CardBody>Body1</CardBody>
            </Card>
            <Card custStyle="card ml-2 has-background-info-light">
                <CardHead>Head2</CardHead>
                <CardBody>Body2</CardBody>
            </Card>
        </CardsWrap>
        <AddBtn custStyle="button is-info is-outlined ml-2 mb-2">Add Task</AddBtn>
        <Table>
            <TableHead>
                <TableHeader></TableHeader>
            </TableHead>
        </Table>
        </>

    )
}

export default TasksList;
