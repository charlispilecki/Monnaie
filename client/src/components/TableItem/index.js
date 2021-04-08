import React from "react";
import BootstrapTable from "react-bootstrap-table-next";


export function Table({ children }) {
    return <table className={"table is-bordered is-striped is-narrow is-hoverable is-fullwidth"}>{children}</table>;
}

export function TableHead({ fluid, children }) {
    return <thead className={`tableHead${fluid ? "-fluid" : ""}`}>{children}</thead>;
}

export function TableBody({ fluid, children }) {
    return <tbody className={`tableBody${fluid ? "-fluid" : ""}`}>{children}</tbody>;
}

export function TableRow({ fluid, children }) {
    return <table className={`tableRow${fluid ? "-fluid" : ""}`}>{children}</table>;
}

export function TableHeader({ fluid, children }) {
    return <th className={`tableheader${fluid ? "-fluid" : ""}`}>{children}</th>;
}

export function TableData({ children }) {
    return <td className="is-flex is-justify-content-space-between">{ children }</td>;
}



// export function Table({ style, children }) {
//     return <table className={style}>{children}</table>;
// }

// export function TableHead({ style, children }) {
//     return <thead className={style}>{children}</thead>;
// }

// export function TableBody({ style, children }) {
//     return <tbody className={style}>{children}</tbody>;
// }

// export function TableRow({ style, children }) {
//     return <table className={style}>{children}</table>;
// }

// export function TableHeader({ style, children }) {
//     return <th className={style}>{children}</th>;
// }

// export function TableData({ style, children }) {
//     return <td className={style}>{ children }</td>;
// }

function Table(props) {
    
    return <BootstrapTable 
    keyField="id"
    data={ props.custData }
    columns = { props.columns }
    // sort={ [
    //     { dataField: "name", order: "asc" },
    //     { dataField: "location", order: "asc"},
    //     { dataField: "email", order: "asc"}
    // ]}
    striped
    hover    
    />
}

export default Table;