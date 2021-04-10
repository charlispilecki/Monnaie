import React, { useRef, useContext } from "react";
import $ from "jquery";
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TASK, LOADING } from "../../utils/actions";
import API from "../../utils/API";
import MonnaieContext from "../../utils/MonnaieContext";


function TaskCardModal() {
  const descriptionRef = useRef();
  const dueDateRef = useRef();
  const {globalTasks, setGlobalTasks} = useContext(MonnaieContext);

  const handleSubmit = e => {
    e.preventDefault();
    API.saveTask({
      description: descriptionRef.current.value,
      dueDate: dueDateRef.current.value,
      completed: false
    })
      .then(result => {
        setGlobalTasks([result.data, ...globalTasks]);
    })
      .catch(err => console.log(err));
    hideTaskForm();
    descriptionRef.current.value = "";
    dueDateRef.current.value = "";
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
                    <input id="date" class="input datepicker" data-provide="datepicker" ref={dueDateRef} placeholder="Date Due" />
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