import React from "react";

interface IPropsDeleteButton {
    id:number;
    deleteWorker:(id:number)=>void;
}

function DeleteButton(props:IPropsDeleteButton) {
    return (
        <button onClick={()=>props.deleteWorker(props.id)} title="Удалить" id="delete_button">✖</button>
    )
}

export default DeleteButton;