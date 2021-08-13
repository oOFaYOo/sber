import React from "react";

interface IPropsDeleteButton {
    id: number;
    deleteWorker: (id: number) => void;
}

export default function DeleteButton(props: IPropsDeleteButton) {
    return (
        <button onClick={() => props.deleteWorker(props.id)} title="Удалить">✖</button>
    );
}

