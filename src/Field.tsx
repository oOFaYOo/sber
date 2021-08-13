import React, {useState} from "react";
import DeleteButton from "./DeleteButton";

interface IPropsField {
    id: number;
    name: string;
    age: string;
    salary: string;
    tax: string;
    deleteWorker: (id: number) => void;
}

export default function Field(props: IPropsField) {
    let [deleteButtonVisibility, setVisibility] = useState(false);

    return (
        <tr onMouseEnter={() => {
            setVisibility(true)
        }} onMouseLeave={() => {
            setVisibility(false)
        }} className="worker">
            <td className="light_gray">
                {deleteButtonVisibility ? <DeleteButton id={props.id} deleteWorker={props.deleteWorker}/> : null}
                {props.name}</td>
            <td className="dark_gray">{props.age}</td>
            <td className="light_gray">{props.salary}</td>
            <td className="dark_gray">{props.tax}</td>
        </tr>
    );
}
