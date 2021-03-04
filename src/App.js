import "./App.css";
import employeeData from "./employees.json";
import React, { useEffect, useState } from "react";
import TableHeader from "./components/TableHeader";
import EmployeeTable from "./components/EmployeeTable";
import "bootstrap/dist/css/bootstrap.min.css";
import api from "./utils/Api";
import SortBtn from "./components/SortBtn";
import { propTypes } from "react-bootstrap/esm/Image";

function App() {
  const [employees, setEmployees] = useState([]);

  // useEffect(async () => {
  //   const employeeData = await import("./employees.json");
  //   setEmployees(employeeData);
  // }, []);

  useEffect(() => {
    loadEmployee();
  }, []);

  function loadEmployee() {
    api
      .getEmployees()
      .then((employees) => {
        setEmployees(employees);
      })
      .catch((err) => {
        if (err) {
          throw err;
        }
      });
  }

  function sortId() {
    employees.sort((a, b) => (a.id > b.id ? 1 : -1));
  }
  // const removeFriend = (id) => {
  //   const employees = this.state.employees.filter((friend) => friend.id !== id);

  //   this.setState({ employees });
  // };

  return (
    <div>
      <h1>Employee Directory</h1>
      <SortBtn onClick={sortId} />
      <table className="table table-striped table-dark">
        <TableHeader />
        <tbody>
          {employees.map((employee) => (
            <EmployeeTable
              id={employee.id}
              firstName={employee.firstName}
              lastName={employee.lastName}
              email={employee.email}
              pic={employee.picture}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
