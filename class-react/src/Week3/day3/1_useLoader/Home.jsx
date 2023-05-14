import { useOutletContext } from "react-router-dom";

export function Home() {
  const x = useOutletContext();
  console.log(x);
  return <h1>Home Page</h1>;
}
