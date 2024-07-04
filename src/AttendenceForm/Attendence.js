import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import "./Attendence.css"

const Attendence = () => {
  const [userdata, setUserdata] = useState([]);
  useEffect(() => {
    AxiosData(URL);
  });
  let URL = "http://localhost:3001/AttendenceForm";
 const AxiosData = async () => {
    const ApI = await fetch(URL);
    const response = await ApI.json();
    setUserdata(response);
  };

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Gender</th>
            <th>Contact</th>
            <th>Email Address</th>
            <th>Date</th>
            <th>Feedback</th>
            
          </tr>
        </thead>
        <tbody>
          {userdata.map(({ id, Firstname, Lastname, Gender,Contact,Email,Date,Feedback }) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{Firstname}</td>
              <td>{Lastname}</td>
              <td>{Gender}</td>
              <td>{Contact}</td>
              <td>{Email}</td>
              <td>{Date}</td>
              <td>{Feedback}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Attendence;
