import Table, {IWorker} from "./table";
import AddWorker from "./AddWorker";
import React, {useState} from "react";

export default function App() {
    const tableData: {header:string[], workers:IWorker[]} = {
        header: ["Фио", "Полных лет", "Зарплата", "Налог"],
        workers: [
            {
                id: 1,
                name: "Владимир Маленков",
                dateBirth: "10.12.1992",
                salary: "30000р"
            },
            {
                id: 2,
                name: "Светлана Тихонова",
                dateBirth: "04.09.1996",
                salary: "70000р"
            },
            {
                id: 3,
                name: "Михайл Зубенко",
                dateBirth: "21.04.1988",
                salary: "300000р"
            },
            {
                id: 4,
                name: "Марина Шарикова",
                dateBirth: "10.12.1999",
                salary: "100000р"
            }
        ]
    };

    let [workers, setWorkers] = useState(tableData.workers);

    return (
        <div id="container">
            <AddWorker addWorker={addWorker}/>
            <Table deleteWorker={deleteWorker} workers={workers} header={tableData.header}/>
        </div>
    );

    function deleteWorker(id: number): void {
        const newWorkers = workers.slice();
        setWorkers(newWorkers.filter(item => !(item.id === id)));
    }

    function addWorker(name: string, birthday: string, salary: string): void {
        if (name === "" || birthday === "" || salary === "") return;
        const newWorkers = workers.slice();
        newWorkers.push(
            {
                id: Math.max(...workers.map(worker => worker.id)) + 1,
                name: name,
                dateBirth: birthday,
                salary: salary
            }
        );
        setWorkers(newWorkers);
    }

}