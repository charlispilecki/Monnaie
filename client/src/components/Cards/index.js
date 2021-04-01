import React from "react";

export function CardsWrap({ children }) {
    return <div className="is-flex is-justify-content-center">{children}</div>
}

export function Card({ style, children }) {
    return ( 
        <div className={style}>            
            <div className="card-header">
                <p className="card-header-title">{children}</p>
            </div>
            <div class="card-content is-flex is-justify-content-center">
                <div class="content">{children}</div>
            </div>
        </div>
    )    
}