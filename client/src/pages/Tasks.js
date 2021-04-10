import React,  {useContext} from "react";
import 'bulma/css/bulma.css';
// import "./style.css";
import TaskCardModal from "../components/cardModal";
// import Header  from "../components/Header";
// import Navbar from "../components/Navbar";
import { CardsWrap, Card, CardHead, CardBody } from "../components/Cards";
import $ from "jquery";

// import Table from "../components/TableItem";
// import { Table, TableRow, TableHead, TableHeader } from "../components/TableItem";
// import DeleteBtn from "../components/DeleteBtn";
import AddBtn from "../components/AddBtn";
import MonnaieContext from "../utils/MonnaieContext";

// class App extends Component {
//     state = {
//         tasks: [{}]
//     }
// }

function showTaskForm() {
    console.log("button click");
    $(".modal").addClass("is-active");
}

// const sampTasks = [
//     {
//         description: "task1",
//         dueDate: "05/01/2021",
//         completed: false,
//     }, {
//         description: "task2",
//         dueDate: "05/02/2021",
//         completed: false,
//     }, {
//         description: "task3",
//         dueDate: "05/03/2021",
//         completed: false,
//     }, {
//         description: "task4",
//         dueDate: "05/01/2021",
//         completed: true,
//     },
// ];


const TasksList = () => {

    const {globalTasks, setGlobalTasks} = useContext(MonnaieContext);

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
        <p>{JSON.stringify(globalTasks)}</p>
        {/* <div class="modal">
            <div class="modal-background"></div>
            <div class="modal-card">
                <header class="modal-card-head">
                    <p class="modal-card-title">Task</p>
                    <button class="delete" aria-label="close" onClick={hideTaskForm}></button>
                </header>
                <section class="modal-card-body">
                    <form onSubmit={handleSubmit}>
                        <input id="description" class="input" placeholder="Description" />
                        <input id="date" class="input datepicker" data-provide="datepicker" placeholder="Date Due" />
                    </form>                    
                </section>
                <footer class="modal-card-foot">
                    <button class="button is-success" onClick={saveTask}>Save</button>
                    <button class="button" onClick={hideTaskForm}>Cancel</button>
                </footer>
            </div>
        </div> */}
        <TaskCardModal/>
        {/* <Table tasks={this.state.tasks}></Table>               */}
        </>

    )
}

export default TasksList;
