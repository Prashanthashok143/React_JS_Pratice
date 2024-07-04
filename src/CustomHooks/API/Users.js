import React from "react";
import Table from "react-bootstrap/Table";
import useAPI from "./useAPI";
let URL="https://jsonplaceholder.typicode.com/users";
const Users = () => {
   const [userdata,loading,iserror] = useAPI(URL);
   if (loading) {
    return <h1>loading.....</h1>;
  }
  if (iserror) {
    return <h1>error</h1>;
  }
  return (
    <div>
      <h1>Users</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email Address</th>
          </tr>
        </thead>
        <tbody>
          {userdata.map(({ id, username, name, email }) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{username}</td>
              <td>{name}</td>
              <td>{email}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Users;
