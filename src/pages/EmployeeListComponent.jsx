import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const url = './db/employees.json';

const EmployeeListComponent = () => {
  const [employees, setEmployees] = useState([]);

 

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setEmployees(data));
  }, []);

  

  return (
    <div>
      <table>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>
                <Link to={`/employee/${employee.id}`}>{employee.id}</Link>
              </td>
              <td>{employee.name}</td>
              <td>{employee.salary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeListComponent;