import React from "react";
import { useState } from "react";
import axios from "axios";

const AddIntern = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    gender: "",
    contact: "",
    email: "",
    date: "",
    feedback: "",
  });
  const handleChanges = (event) => {
    console.log(event);
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const submitData = (event) => {
    event.preventDefault();
    const { fname, lname, gender, contact, email, date, feedback } = formData;

    const InputValues = {
      Firstname: fname,
      Lastname: lname,
      Contact: contact,
      Email: email,
      Date: date,
      Gender: gender,
      Feedback: feedback,
    };
 
  axios
  .post(`http://localhost:3001/AttendenceForm`, InputValues)
  .then((result) => {
    console.log(result.data);
  })
  .catch((error) => {
    console.log(error);
  });
setFormData({
  fname: "",
  lname: "",
  gender: "",
  contact: "",
  email: "",
  date: "",
  feedback: "",
});

  };

  const divColor = {
    position: "relative",
    bottom: "48px",
    height: "450px",
    backgroundColor: "#f0f0f0",
    boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.5)",
  };

  return (
    <div style={divColor}>
      <div className="border d-flex justify-content-center w-100 m-auto p-3 mt-5">
        <form className="container" onSubmit={submitData}>
          <div className="Names d-flex flex-column m-2">
            <label htmlFor="fname">
              Firstname :
              <input
                type="text"
                name="fname"
                className="m-2"
                value={formData.fname}
                onChange={handleChanges}
              />
            </label>
            <label htmlFor="lname">
              Lastname :
              <input
                type="text"
                name="lname"
                className="m-2"
                value={formData.lname}
                onChange={handleChanges}
              />
            </label>
          </div>
          <div className="ms-2">
            <label>
              Gender :
              <label htmlFor="male" className="ms-4">
                Male
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="male"
                  className="ms-2"
                  checked={formData.gender === "male"}
                  onChange={handleChanges}
                />
              </label>
              <label htmlFor="Female" className="ms-4">
                Female
                <input
                  type="radio"
                  id="Female"
                  name="gender"
                  value="Female"
                  className="ms-2"
                  checked={formData.gender === "Female"}
                  onChange={handleChanges}
                />
              </label>
            </label>
          </div>
          <div className="contact ms-2">
            <label htmlFor="contact">
              Phone no :
              <input
                type="tel"
                className="m-2"
                value={formData.contact}
                onChange={handleChanges}
                name="contact"
                id="contact"
              />
            </label>
          </div>
          <div className="Email m-2">
            <label htmlFor="email">
              EmailAdd :
              <input
                type="email"
                className="ms-2"
                value={formData.email}
                onChange={handleChanges}
                name="email"
                id="email"
              />
            </label>
          </div>

          <div className="timings m-2">
            <label>
              Date:
              <input
                type="date"
                value={formData.date}
                name="date"
                className="ms-5"
                onChange={handleChanges}
                placeholder="Date"
              />
            </label>
          </div>
          <label htmlFor="feedback">Feedback :</label>
          <input
            type="text"
            value={formData.feedback}
            onChange={handleChanges}
            name="feedback"
            className="w-100"
          />
          <button className="btn btn-primary m-2">Add Intern Attendence</button>
        </form>
      </div>
    </div>
  );
};

export default AddIntern;
