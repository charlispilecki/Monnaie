import React from "react";
import 'bulma/css/bulma.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import "./style.css";
import BootstrapTable from "react-bootstrap-table-next";
import Header  from "../components/Header";
import Navbar from "../components/Navbar";
import { CardsWrap, Card, CardHead, CardBody } from "../components/Cards";

// import Table from "../components/TableItem";
// import { Table, TableHead, TableHeader } from "../components/TableItem";
// import DeleteBtn from "../components/DeleteBtn";
import AddBtn from "../components/AddBtn";

const columns = [{
    dataField: "name",
    text: "Name",
    sort: true,
    headerStyle: (colum, colIndex) => {
        return { width: "15vw", textAlign: "center", fontSize: "1.4em" };
      },
    style: { paddingTop: "50px", fontSize: "1.3em" }
}, {
    dataField: "phone",
    text: "Phone Number",
    sort: false,
    headerStyle: (colum, colIndex) => {
        return { width: "10vw", textAlign: "center", fontSize: "1.4em" };
      },
    style: { paddingTop: "50px", fontSize: "1.3em"  }
},{
    dataField: "location",
    text: "Location",
    sort: true,
    headerStyle: (colum, colIndex) => {
        return { width: "15vw", textAlign: "center", fontSize: "1.4em" };
      },
    style: { paddingTop: "50px", fontSize: "1.3em"  }
}];

const task = [{
    name: "Chad",
    phone: "555555",
    location: "Bastrop"
},{
    name: "Chad1",
    phone: "5555551",
    location: "Bastrop"
},{
    name: "Chad2",
    phone: "5555552",
    location: "Bastrop"
},
]

const rowClasses = (row, rowIndex) => {
    return "is-flex is-justify-content-space-between";
  };

const TasksList = () => {

    return (
        <>
        <Header />
        <Navbar />
        <CardsWrap>
            <Card custStyle="card mr-2 has-background-primary-light">
                <CardHead>Estimated Cost Total:</CardHead>
                <CardBody>Body1</CardBody>
            </Card>
            <Card custStyle="card ml-2 has-background-info-light">
                <CardHead>Head2</CardHead>
                <CardBody>Body2</CardBody>
            </Card>
        </CardsWrap>
        <AddBtn custStyle="button is-info is-outlined ml-2 mb-2">Add Task</AddBtn>
        {/* <Table>
            <TableHead>
                <TableHeader></TableHeader>
            </TableHead>
        </Table> */}
        <BootstrapTable headerWrapperClasses="is-flex is-justify-content-space-between" keyField="id" data={ task } columns={ columns } rowClasses={ rowClasses } />
        </>

    )
}

export default TasksList;
