import React from "react";
import $ from "jquery";

// $(".datepicker").datepicker();

export default function CardModal(handleClick) {
   return (
        <div className="modal">
            <div className="modal-background"></div>
            <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title">Task</p>
                    <button className="delete" aria-label="close" onClick={handleClick}></button>
                </header>
                <section className="modal-card-body">
                    <input id="description" className="input" placeholder="Description" />
                    <input id="date" className="input datepicker" data-provide="datepicker" placeholder="Date Due" />
                </section>
                <footer className="modal-card-foot">
                    <button className="button is-success" onClick={handleClick}>Save</button>
                    <button className="button" onClick={this.handleClick}>Cancel</button>
                </footer>
            </div>
        </div>
    ) 
}



