import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  DecrementPayload,
  IncrementPayload,
  decrement,
  increment,
  Deposit,
  Withdraw,
  fetchData,
} from "./CounterSlice";

const CounterApp = () => {
  const [depositValue, setDepositValue] = useState(0);
  const [withdrawValue, setWithdrawValue] = useState(0);
  const { count, deposit, withdraw,total } = useSelector((state) => state);
 const Data=useSelector((state)=>state.backendData)
  const dispatch = useDispatch();

  return (
    <div>
      <hr/>
      <button onClick={()=> dispatch(fetchData())} className="btn btn-danger">Fetch BackendData</button>
      <h1>{Data?.length >0 && (
        <table className="table table-dark table-hover w-50 m-3">
          <thead>
            <tr>
              <td>Id</td>
              <td>Name</td>
              <td>Username</td>
            </tr>
          </thead>
          <tbody>
            {
              Data.map(({id,name,username})=>(
                <tr key={id}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{username}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      )}</h1>
      <hr/>
      <h1>Counter App In Redux Tool Kit</h1>

      <button onClick={() => dispatch(increment())} className="btn btn-success">
        Increment
      </button>
      <button
        onClick={() => dispatch(IncrementPayload(5))}
        className="btn btn-danger"
      >
        Increment Payload
      </button>
      <h3>Counter Value : {count}</h3>
      <button onClick={() => dispatch(decrement())} className="btn btn-warning">
        Decrement
      </button>
      <button
        onClick={() => dispatch(DecrementPayload(5))}
        className="btn btn-info"
      >
        Increment Payload
      </button>
      <hr className="mt-5" />
      <div className="m-5">
        <input
          type="number"
          value={depositValue}
          onChange={(e) => setDepositValue(e.target.value)}
        />

        <button
          onClick={() => dispatch(Deposit(depositValue),
        setDepositValue(0))}
          className="btn btn-primary m-2"
        >
          Deposit
        </button>
        <input
          type="number"
          value={withdrawValue}
          onChange={(e) =>setWithdrawValue(e.target.value)}
        />

        <button
          onClick={() => dispatch(Withdraw(withdrawValue),
        setWithdrawValue(0))}
          className="btn btn-dark m-2"
        >
          Withdraw
        </button>
      </div>
      <table className="table table-dark table-hover w-50 m-3">
        <thead>
          <tr>
            <th>Name</th>
            <th>Deposit</th>
            <th>Withdraw</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Prashanth</td>
            <td>{deposit}</td>
            <td>{withdraw}</td>
            <td>{total}</td>
          </tr>
        </tbody>
      </table>
      
    </div>
  );
};

export default CounterApp;
