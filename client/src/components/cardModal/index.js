import React, { useRef } from "react";
import $ from "jquery";
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TASK, LOADING } from "../../utils/actions";
import API from "../../utils/API";

function TaskCardModal() {
  const descriptionRef = useRef();
  const dueDateRef = useRef();
  const [state, dispatch] = useStoreContext();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: LOADING });
    API.saveTask({
      description: descriptionRef.current.value,
      dueDate: dueDateRef.current.value,
      completed: false
    })
      .then(result => {
        dispatch({
          type: ADD_TASK,
          task: result.data
        });
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
    <div class="modal">
        <div class="modal-background"></div>
        <div class="modal-card">
            <header class="modal-card-head">
                <p class="modal-card-title">Task</p>
                <button class="delete" aria-label="close" onClick={hideTaskForm}></button>
            </header>
            <section class="modal-card-body">
                {/* <form onSubmit={handleSubmit}> */}
                <form>
                    <input id="description" class="input" placeholder="Description" />
                    <input id="date" class="input datepicker" data-provide="datepicker" placeholder="Date Due" />
                </form>                    
            </section>
            <footer class="modal-card-foot">
                {/* <button class="button is-success" disabled={state.loading} type="submit">Save</button> */}
                <button class="button is-success" type="submit">Save</button>
                <button class="button" onClick={hideTaskForm}>Cancel</button>
            </footer>
        </div>
    </div>
  );
}

export default TaskCardModal;