import Button from "react-bootstrap/Button";

import { Link } from "react-router-dom";

const divColor = {
  width:"100%",
  padding:"30px",
  backgroundColor: "#f0f0f0",
  boxShadow: "10px 0px 10px rgba(0, 0, 0, 0.5)",
};

function Navbar() {
  return (
    <div style={divColor}>
      <h1 className="d-flex justify-content-center">Intern Attendence</h1>
      <div className="border d-flex justify-content-around p-3">
        <Button variant="dark">
          <Link to="/" style={{ textDecoration: "none", color: "whitesmoke"}}>
            AddIntern
          </Link>
        </Button>
        <Button variant="success">
          <Link
            to="/attendence"
            style={{ textDecoration: "none", color: "whitesmoke" }}
          >
            Attendence
          </Link>
        </Button>
      </div>
    </div>
  );
}

export default Navbar;
