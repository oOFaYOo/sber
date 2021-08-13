import React, {useState} from "react";
import Row from "./Row";

export interface IWorker {
    id: number;
    name: string;
    dateBirth: string;
    salary: string;
}

interface IPropsTable {
    header: string[];
    workers: IWorker[];
    deleteWorker: (id: number) => void;
}

export default function Table(props: IPropsTable) {
    return (
        <table>
            <tr className="title">{
                props.header.map(item => <td>{item}</td>)
            }</tr>
            {
                props.workers.map(item => <Row id={item.id} name={item.name}
                                               age={getAge(item.dateBirth)}
                                               salary={item.salary}
                                               tax={getTax(item.salary)}
                                               deleteWorker={props.deleteWorker}
                />)
            }
        </table>
    );
}

function getTax(salary: string, rate: number = 13): string {
    let cy = ""; //валюта *currency
    let amountMoney = ""; //убираем из зарплаты врякие "р", "рублей" и тд.
    salary.split("").forEach(item => {
        if (!isNaN(+item)) {
            amountMoney += (item);
        } else cy += item;
    })
    const money = +amountMoney;
    const result = money / 100 * rate;
    return result.toString() + cy;
}

function getAge(dateOfBirth: string): string {
    const age = Date.now() - new Date(dateOfBirth.split(".").reverse().join("-")).getTime();
    const seconds = age / 1000;
    const minutes = seconds / 60;
    const hours = minutes / 60;
    const days = hours / 24;
    const years = days / 365;
    return Math.trunc(years).toString();
}
