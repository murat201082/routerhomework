import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EmployeeComponent = () => {
  const { id } = useParams();
  const getUrl = `/db/employee${id}.json`;
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    fetch(getUrl)
      .then((res) => res.json())
      .then((data) => setEmployee(data));
  }, [getUrl]);

  

  return (
    <div>
      <form onSubmit={null}>
      {employee !== null ? (
  <div key={employee.id}>
    <h2>id : {employee.id}</h2>
    <h2>name : {employee.name}</h2>
    <h2>salary : {employee.salary}</h2>
  </div>
) : (
  <p>Loading...</p>
)}
      </form>
    </div>
  );
};

export default EmployeeComponent;