import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Table from 'react-bootstrap/Table';

const Template1 = () => {
  const [data, setData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    month: "",
    year: "",
    day: "",
    number: "",
    gender: "",
    agree: false,
  });
  const [error, setError] = useState(false);
  const handleChanges = (e) => {
    const { name, value, checked, type } = e.target;
    const res = type === "checkbox" ? checked : value;
    setData({ ...data, [name]: res });
  };

  const handleSubmitData = () => {
    const { firstName, lastName, month, day, year, number,gender } = data;
    if (firstName && lastName && month && day && year && number && gender) {
      setError(true);
      toast.success("Successfully submitted the Data");
    } else {
      toast.error("Input fields cannot be empty !");
    }
  };

  return (
    <div
      className="w-100"
      style={{ position: "relative", top: "0px", left: "130px" }}
    >
      <h1>College Admissions Form</h1>
      <h6>Enter your admission information below</h6>
      <hr className="w-75" />
      <h6> Name</h6>
      <div className="d-flex flex-row m-2" id="Name">
        <div className="d-flex flex-column w-25 m-2">
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={data.firstName}
            onChange={handleChanges}
          />
          <label htmlFor="firstName">FirstName</label>
        </div>
        <div className="d-flex flex-column w-25 m-2">
          <input
            type="text"
            name="middleName"
            id="middleName"
            value={data.middleName}
            onChange={handleChanges}
          />
          <label htmlFor="middleName">MiddleName</label>
        </div>
        <div className="d-flex flex-column w-25 m-2">
          <input
            type="text"
            name="lastName"
            id="lastName"
            value={data.lastName}
            onChange={handleChanges}
          />
          <label htmlFor="lastName">LastName</label>
        </div>
      </div>
      <h6> Birth Date </h6>
      <div className="d-flex flex-row m-2" id="BirthDate">
        <div className="d-flex flex-column w-25 m-2">
          <select
            id="Month"
            name="month"
            value={data.month}
            onChange={handleChanges}
          >
            <option defaultChecked>Please select a month</option>
            <option value="January">January</option>
            <option value="February">February</option>
            <option value="March">March</option>
            <option value="April">April</option>
            <option value="May">May</option>
            <option value="June">June</option>
          </select>
          <label htmlFor="Month">Month</label>
        </div>

        <div className="d-flex flex-column w-25 m-2">
          <select id="Day" name="day" value={data.day} onChange={handleChanges}>
            <option defaultChecked>Please select a day</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
          </select>
          <label htmlFor="Day">Day</label>
        </div>
        <div className="d-flex flex-column w-25 m-2">
          <select
            id="Year"
            name="year"
            value={data.year}
            onChange={handleChanges}
          >
            <option defaultChecked>Please select a year</option>
            <option value={2024}>2024</option>
            <option value={2023}>2023</option>
            <option value={2022}>2022</option>
            <option value={2021}>2021</option>
            <option value={2020}>2020</option>
            <option value={2019}>2019</option>
          </select>
          <label htmlFor="Year">Year</label>
        </div>
      </div>
      <h6> Gender</h6>
      <div className="d-flex flex-row w-75 me-5 justify-content-around">
        <div>
          <input
            type="radio"
            name="gender"
            id="Male"
            value="male"
            
            onChange={handleChanges}
            className="m-2"
          />
          <label htmlFor="Male">Male</label>
        </div>
        <div>
          <input
            type="radio"
            name="gender"
            id="Female"
            value="female"
       
       onChange={handleChanges}
            className="m-2"
          />
          <label htmlFor="Female">Female</label>
        </div>
        <div
          className="d-flex flex-column w-25 m-1"
          style={{ position: "relative", top: "0px", left: "50px" }}
        >
          <h6 htmlFor="Country">Of which country are you a citizen?</h6>
          <select id="Country">
            <option defaultChecked>Please select</option>
            <option value="Afghanistan">Afghanistan</option>
            <option value="Beligum">Beligum</option>
            <option value="Canada">Canada</option>
            <option value="Dubai">Dubai</option>
            <option value="Egypt">Egypt</option>
            <option value="France">France</option>
          </select>
        </div>
      </div>
      <div className="d-flex flex-row m-2">
        <div className="d-flex flex-column w-25 m-2">
          <label htmlFor="Phone">Phone</label>
          <input
            type="number"
            id="Phone"
            placeholder="(000) 000-0000"
            value={data.number}
            name="number"
            onChange={handleChanges}
          />
        </div>
        <div className="d-flex flex-column w-50 m-2">
          <label htmlFor="Email">E-mail Address</label>
          <input type="Email" id="Email" placeholder="ex: myname@example.com" />
          <label htmlFor="Email">example@example.com</label>
        </div>
      </div>
      Mailing Address
      <div>
        <div className="d-flex flex-column w-75 m-3">
          <input type="text" id="street Address" />
          <label htmlFor="street Address">Street Address</label>
        </div>
        <div className="d-flex flex-column w-75 m-3">
          <input type="text" id="street Address2" />
          <label htmlFor="street Address2">Street Address Line 2</label>
        </div>

        <div className="d-flex flex-row m-1">
          <div className="d-flex flex-column w-25 ms-2">
            <input type="text" id="city" />
            <label htmlFor="city">City</label>
          </div>

          <div className="d-flex flex-column w-50 ms-1 m">
            <input type="text" id="State" />
            <label htmlFor="State">State / Province</label>
          </div>
        </div>
        <div className="d-flex flex-column w-75 m-3">
          <input type="text" id="Postal" />
          <label htmlFor="Postal">Postal / Zip Code</label>
        </div>
      </div>
      <h6 style={{ position: "relative", top: "8px", left: "14px" }}>
        Emergency Contact
      </h6>
      <div className="d-flex flex-row m-2" id="Name">
        <div className="d-flex flex-column w-25 m-2">
          <input type="text" name="First Name" id="First Name" />
          <label htmlFor="First Name">First Name</label>
        </div>

        <div className="d-flex flex-column w-25 m-2">
          <input type="text" name="LastName" id="LastName" />
          <label htmlFor="LastName">LastName</label>
        </div>

        <div
          className="d-flex flex-column w-25"
          style={{ position: "relative", bottom: "18px" }}
        >
          <h6>RelationShip</h6>
          <input type="text" name="RelationShip" id="RelationShip" />
        </div>
      </div>
      <div className="d-flex flex-row m-2">
        <div className="d-flex flex-column w-25 m-2">
          <label htmlFor="Phone no">Phone</label>
          <input type="number" id="Phone no" placeholder="(000) 000-0000" />
        </div>
        <div className="d-flex flex-column w-50 m-2">
          <label htmlFor="EmailAdd">E-mail Address</label>
          <input
            type="Email"
            id="EmailAdd"
            placeholder="ex: myname@example.com"
          />
          <label htmlFor="EmailAdd">example@example.com</label>
        </div>
      </div>
      <h6> Do you speak any languages other than English?</h6>
      <div className="d-flex flex-row justify-content-around w-50">
        <div>
          <input type="radio" name="Boolean" id="Yes" className="m-2" />
          <label htmlFor="Yes">Yes</label>
        </div>
        <div>
          <input type="radio" name="Boolean" id="No" className="m-2" />
          <label htmlFor="No">No</label>
        </div>
      </div>
      <div>
        <input
          type="checkbox"
          name="agree"
          id="agree"
          className="m-1"
      
          checked={data.agree}
          onChange={handleChanges}
        />
        <label htmlFor="agree">
          Please Check it if you confirm the details{" "}
        </label>
      </div>
      <div className="d-flex justify-content-center">
        <button className="btn btn-success" onClick={handleSubmitData}>Submit</button>
      </div>
      <ToastContainer />
      {error && (
         <Table striped bordered hover className="w-75 m-2">
         <thead>
           <tr>
             
             <th>First Name</th>
             <th>Last Name</th>
             <th>Gender</th>
             <th>Data of Birth</th>
             <th>Contact</th>
             <th>Terms</th>
           </tr>
         </thead>
         <tbody>
           <tr>
             <td>{data.firstName}</td>
             <td>{data.lastName}</td>
             <td>{data.gender}</td>
             <td>{data.day}-{data.month}-{data.year}</td>
             <td>{data.number}</td>
             <td>{data.agree?"accepted":"not accepted"}</td>
             
           </tr>
        
         </tbody>
       </Table>
     
      )}
    </div>
  );
};

export default Template1;
