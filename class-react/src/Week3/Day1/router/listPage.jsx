import { useParams } from "react-router-dom";

export function ListPage() {
  const { Id } = useParams();
  return (
    <>
      <h1>List {Id}</h1>
    </>
  );
}
