import React, { useRef } from "react";
import $ from "jquery";
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TASK, LOADING } from "../../utils/actions";
import API from "../../utils/API";

function TaskCardModal() {
  const descriptionRef = useRef();
  const dateRef = useRef();
//   const state = useStoreContext();
  const dispatch = useStoreContext();
//   const [state, dispatch] = useStoreContext();

  function handleSubmit(e) {
      handleFormSubmit(e);
      console.log(dateRef.current.value);
      hideTaskForm();
  }

  const handleFormSubmit = e => {
    console.log(descriptionRef.current.value, dateRef.current.value);
    // console.log();
    hideTaskForm();
    e.preventDefault();
    // dispatch({ type: LOADING });
    API.saveTask({
      description: descriptionRef.current.value,
      dueDate: dateRef.current.value,
      completed: false
    })
      .then(result => {
        dispatch({
          type: ADD_TASK,
          task: result.data
        });
      })
      .catch(err => console.log(err));
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
            <section className="modal-card-body">
                    <input id="description" className="input" required ref={descriptionRef} placeholder="Description" />
                    <input id="date" className="input datepicker" data-provide="datepicker" required ref={dateRef} placeholder="Date Due" />
            </section>
            <footer className="modal-card-foot">
                {/* <button className="button is-success" disabled={state.loading} type="submit">Save</button> */}
                <button className="button is-success" type="submit" onClick={handleFormSubmit}>Save</button>
                <button className="button" onClick={hideTaskForm}>Cancel</button>
            </footer>
        </div>
    </div>
  );
}

export default TaskCardModal;