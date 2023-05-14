import { useLocation } from "react-router-dom";

export function Page1() {
  const { state } = useLocation();

  return (
    <>
      <h1>Page 1 {state.name}</h1>
    </>
  );
}
