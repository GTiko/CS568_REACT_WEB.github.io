import { Link, Outlet } from "react-router-dom";

const data = 123;

export function Root() {
  return (
    <>
      <center>
        <h1>Test Page</h1>
        <Link to="/Home">Home</Link> &nbsp;&nbsp;
        <Link to="/Data">Data</Link> &nbsp;&nbsp;
        <Link to="/About">About</Link> &nbsp;&nbsp;
      </center>
      <main>
        <Outlet  context={data}/>
      </main>
    </>
  );
}
