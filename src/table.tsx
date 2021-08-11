import React from "react";

interface IWorker{
  id:number;
  name:string;
  dateBirth:string;
  salary:string;
}

interface ITableProps {
  headers: string[];
  workers: IWorker[];
}

export default function Table(props:ITableProps) {
    
  return (
    <div>
      <table>
        <tr>
          {
            props.headers.map(item => <td>{item}</td>)
          }
        </tr>
        {
          props.workers.map(item => <tr>
            <td>{item.name}</td>
            <td>{getAge(item.dateBirth)}</td>
            <td>{item.salary}</td>
            <td>{getTax(item.salary)}</td>
          </tr>)
        }
        <tr>
          <td>Ячейка 2x1 </td>
          <td>Ячейка 2x2 </td>
          <td>Ячейка 2x3 </td>
          <td>Ячейка 2x3 </td>
          <td>Ячейка 2x3 </td>
        </tr>
      </table>
    </div>
  );
  
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


}
