import React, {useEffect, useState} from "react";
import Field from "./Field";

interface IWorker{
  id:number;
  name:string;
  dateBirth:string;
  salary:string;
}

interface ITableProps {
  header: string[];
  workers: IWorker[];
  deleteWorker:(id:number)=>void;
}

export default function Table(props:ITableProps) {

  return (
      <table>
        <tr className="title">
          {
            props.header.map(item => <td>{item}</td>)
          }
            </tr>
        {
          props.workers.map(item => <Field id={item.id} name={item.name}
                                           age={getAge(item.dateBirth)}
                                           salary={item.salary}
                                           tax={getTax(item.salary)}
                                           deleteWorker={props.deleteWorker}
          />)
        }
      </table>
  );

}


function getTax(salary:string, rate:number=13):string {
  let cy = ""; //валюта *currency
  let amountMoney:string[] = []; //убираем из зарплаты врякие "р", "рублей" и тд.
  salary.split("").forEach(item => {
    if(!isNaN(+item)){
      amountMoney.push(item);
    } else cy+=item;
  })
  let money = +amountMoney.join("");
  const result = money/100*rate;
  return result.toString()+cy;
}

function getAge(dateOfBirth:string):string {
  let age = Date.now() - new Date(dateOfBirth.split(".").reverse().join("-")).getTime();
  let seconds = age/1000;
  let minutes = seconds/60;
  let hours = minutes/60;
  let days = hours/24;
  let years = days/365;
  return Math.trunc(years).toString();
}

