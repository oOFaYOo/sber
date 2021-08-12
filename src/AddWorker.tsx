import React, {FormEvent} from "react";

interface IAddWorkerProps {
    addWorker:(name:string, birthday:string, salary:string)=>void;
}

export default function AddWorker(props:IAddWorkerProps) {
    return (
        <form onSubmit={(e:FormEvent<HTMLFormElement>)=>{
            props.addWorker(
                (e.currentTarget.elements.namedItem("name") as HTMLInputElement).value,
                (e.currentTarget.elements.namedItem("birthday") as HTMLInputElement).value,
                (e.currentTarget.elements.namedItem("salary") as HTMLInputElement).value,
            )
            e.preventDefault();
        }}>
            <label>ФИО<input type="text" name="name"/></label>
            <label>Дата рождения<input type="text" name="birthday"/></label>
            <label>Зарплата<input type="text" name="salary"/></label>
            <button type="submit">┿</button>
        </form>
    )
}

