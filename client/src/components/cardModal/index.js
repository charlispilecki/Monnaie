import React, { useRef, useContext } from "react";
import $ from "jquery";
import Moment from 'react-moment';
// import { useStoreContext } from "../../utils/GlobalState";
// import { ADD_TASK, LOADING } from "../../utils/actions";
import API from "../../utils/API";
import MonnaieContext from "../../utils/MonnaieContext";



function TaskCardModal() {
  const descriptionRef = useRef();
  const dateRef = useRef();
  const {globalTasks, setGlobalTasks} = useContext(MonnaieContext);

  const handleSubmit = e => {
    e.preventDefault();
    API.saveTask({
      description: descriptionRef.current.value,
      date: dateRef.current.value,
      completed: false
    })
      .then(result => {
        setGlobalTasks([result.data, ...globalTasks]);
    })
      .catch(err => console.log(err));
    hideTaskForm();
    window.location.reload();
    descriptionRef.current.value = "";
    dateRef.current.value = "";
  };

  function hideTaskForm() {
    console.log("button click");
    $(".modal").removeClass("is-active");
    }

  return (
    <div className="modal">
        <div className="modal-background"></div>
        <div className="modal-card">
            <header className="modal-card-head">
                <p className="modal-card-title">Task</p>
                <button className="delete" aria-label="close" onClick={hideTaskForm}></button>
            </header>
            <section class="modal-card-body">
                <form>
                    <input id="description" class="input" placeholder="Description" ref={descriptionRef} />
                    <input id="date" class="input datepicker" data-provide="datepicker" ref={dateRef} placeholder="Date Due" />
                </form>                    
            </section>
            <footer class="modal-card-foot">
                {/* <button class="button is-success" disabled={state.loading} type="submit">Save</button> */}
                <button class="button is-success" onClick={handleSubmit}>Save</button>
                <button class="button" onClick={hideTaskForm}>Cancel</button>
            </footer>
        </div>
    </div>
  );
}

export default TaskCardModal;