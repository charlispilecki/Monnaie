import React from "react";
import "./style.css";

export function CardsWrap({ children }) {
    return <div className="is-flex is-justify-content-center">{children}</div>
}

export function Card({ custStyle, children }) {
    return ( 
        <div className={custStyle}>{children}               
        </div>
    )    
}

export function CardHead({ children }) {
    return (
        <div className="card-header">
            <p className="card-header-title is-flex is-justify-content-center">{children}</p>
        </div>
    )    
}

export function CardBody({ children }) {
    return (
        <div class="card-content is-flex is-justify-content-center">
            <div class="content">{children}</div>
        </div>
    )    
}