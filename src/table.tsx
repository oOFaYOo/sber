import React, {useEffect, useState} from "react";

interface IWorker{
  id:number;
  name:string;
  dateBirth:string;
  salary:string;
}

interface ITableProps {
  header: string[];
  workers: IWorker[];
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
          props.workers.map(item => <tr className="worker">
            <td className="light_gray">{item.name}</td>
            <td className="dark_gray">{getAge(item.dateBirth)}</td>
            <td className="light_gray">{item.salary}</td>
            <td className="dark_gray">{getTax(item.salary)}</td>
          </tr>)
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

