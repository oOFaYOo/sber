import Table from "./table";
import "./styles.css";
import React from "react";

export default function App() {
    const tableData = {
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

  return (
      <div id="container">
        <Table tableData={tableData} />
      </div>
  )
}