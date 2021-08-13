import React, {FormEvent} from "react";

interface IPropsAddWorker {
    addWorker: (name: string, birthday: string, salary: string) => void;
}

export default function AddWorker(props: IPropsAddWorker) {
    return (
        <form onSubmit={(e: FormEvent<HTMLFormElement>) => {
            props.addWorker(
                (e.currentTarget.elements.namedItem("name") as HTMLInputElement).value,
                (e.currentTarget.elements.namedItem("birthday") as HTMLInputElement).value,
                (e.currentTarget.elements.namedItem("salary") as HTMLInputElement).value,
            );
            (e.currentTarget.elements.namedItem("name") as HTMLInputElement).value = "";
            (e.currentTarget.elements.namedItem("birthday") as HTMLInputElement).value = "";
            (e.currentTarget.elements.namedItem("salary") as HTMLInputElement).value = "";
            e.preventDefault();
        }}>
            <label>ФИО<input type="text" placeholder="Иван Иванов" name="name"/></label>
            <label>Дата рождения<input type="text" placeholder="дд.мм.гг" name="birthday"/></label>
            <label>Зарплата<input type="text" placeholder="50000р" name="salary"/></label>
            <button title="Добавить" type="submit">┿</button>
        </form>
    );
}
