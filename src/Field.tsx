import React, {useState} from "react";
import Delete from "./Delete";

interface IPropsField {
    id:number;
    name:string;
    age:string;
    salary:string;
    tax: string;
}

function Field(props:IPropsField) {
    let [deleteButtonVisibility, setVisibility] = useState(false);

    return (
        <tr onMouseEnter={()=>{setVisibility(true)}} onMouseLeave={()=>{setVisibility(false)}} className="worker">
            <td className="light_gray">
                {deleteButtonVisibility?<Delete />:null}
                {props.name}</td>
            <td className="dark_gray">{props.age}</td>
            <td className="light_gray">{props.salary}</td>
            <td className="dark_gray">{props.tax}</td>
        </tr>
    )
}

export default Field;
