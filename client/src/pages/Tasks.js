import React, { useEffect } from "react";
import 'bulma/css/bulma.css';
import  Header  from "../components/Header";
import Navbar from "../components/Navbar";
import { Table, TableHead, TableHeader } from "../components/TableItem";
// import DeleteBtn from "../components/DeleteBtn";
import AddBtn from "../components/AddBtn";



const TasksList = () => {








    return (
        <>
        {/* <Header /> */}
        <Navbar />
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