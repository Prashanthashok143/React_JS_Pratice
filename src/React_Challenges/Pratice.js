import React, { useEffect, useState } from "react";

const Pratice = () => {
  const [error, setError] = useState("");

  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    age: "",
    gender: "",
  });
  const ChangeData = (e) => {
    const { name, value,type ,checked} = e.target;
    const value1 = type ==="checked"?checked:value;
    setData({ ...data, [name]: value1 });
    console.log(e);
  };
  const GetData = (event) => {
    event.preventDefault();
    const { firstname, lastname, age,gender } = data;
    setError(
      `Your name is ${firstname} and lastname is ${lastname} and age is ${age} gender is ${gender}`
    );
    setData({
        firstname: "",
        lastname: "",
        age: "",
        gender: "",
      })
  };
  const [disabledData,setDisabledData]=useState(false)
 useEffect(()=>{
    const{firstname,lastname,age,gender}=data;
    setDisabledData(firstname&& lastname&& age && gender);
 },[data])
  return (
    <div className="border  w-50 m-auto p-3 mt-5">
      <form>
        <label htmlFor="fname">Firstname</label>
        <input
          type="text"
          id="fname"
          name="firstname"
          value={data.firstname}
          onChange={ChangeData}
        />
        <label htmlFor="sname" id="sname" name="sname">
          Lastname
        </label>
        <input
          type="text"
          id="sname"
          name="lastname"
          onChange={ChangeData}
          value={data.lastname}
        />
        <label htmlFor="age">Age</label>
        <input
          type="number"
          id="age"
          name="age"
          onChange={ChangeData}
          value={data.age}
        />
        <label htmlFor="gender">
          Gender
          <input
            type="radio"
            name="gender"
            onChange={ChangeData}
            value="Female"
            checked={data.gender === "Female"}
          
          />
          <input
            type="radio"
            value="male"
            name="gender"
            onChange={ChangeData}
            checked={data.gender === "male"}
          />
        </label>
        <button disabled={!disabledData} onClick={GetData}>Submit</button>
      </form>
      {error}
    </div>
  );
};

export default Pratice;
