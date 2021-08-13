import React, {useState} from "react";

interface IPropsRow {
    id: number;
    name: string;
    age: string;
    salary: string;
    tax: string;
    deleteWorker: (id: number) => void;
}

export default function Row(props: IPropsRow) {
    let [deleteButtonVisibility, setVisibility] = useState(false);

    return (
        <tr onMouseEnter={() => {
            setVisibility(true)
        }} onMouseLeave={() => {
            setVisibility(false)
        }} className="worker">
            <td className="light_gray">
                {deleteButtonVisibility ?
                 <button onClick={() => props.deleteWorker(props.id)} title="Удалить">✖</button> : null}
                {props.name}</td>
            <td className="dark_gray">{props.age}</td>
            <td className="light_gray">{props.salary}</td>
            <td className="dark_gray">{props.tax}</td>
        </tr>
    );
}
