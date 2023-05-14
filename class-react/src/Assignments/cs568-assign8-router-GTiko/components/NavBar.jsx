import BlackBackGround from "./BlackBackGround";
import { Link } from "react-router-dom";

export function NavBar() {
  return (
    <>
      <nav
        style={{
          textAlign: "right",
          marginRight: "5%",
        }}
      >
        <Link to="/students"> Home </Link> &nbsp; &nbsp;
        <BlackBackGround />
      </nav>
      <hr style={{ background: "white" }} />
    </>
  );
}

export function DashBoardNavBar() {
  return (
    <>
      <div
        style={{
          textAlign: "right",
          marginRight: "5%",
        }}
      >
        <Link to="/students/add" style={{ color: "green" }}>
          <>Add Student</>
        </Link>
        &nbsp; &nbsp;
        <Link to="/students/edit" style={{ color: "red" }}>
          <>Edit Student</>
        </Link>
        &nbsp; &nbsp;
        <BlackBackGround />
      </div>
      <hr style={{ background: "white" }} />
    </>
  );
}
