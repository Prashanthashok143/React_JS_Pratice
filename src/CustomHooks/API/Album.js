import React from "react";
import Table from "react-bootstrap/Table";
import useAPI from "./useAPI";
let URL="https://jsonplaceholder.typicode.com/albums";
const Album = () => {
   const [userdata,loading,iserror] = useAPI(URL);
   if (loading) {
    return <h1>loading.....</h1>;
  }
  if (iserror) {
    return <h1>error</h1>;
  }
  return (
    <div>
      <h1>Album</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>userId</th>
            <th>title</th>
           
          </tr>
        </thead>
        <tbody>
          {userdata.map(({ id, userId, title}) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{userId}</td>
              <td>{title}</td>
            
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Album;
