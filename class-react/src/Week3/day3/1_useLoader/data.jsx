import { useLoaderData } from "react-router-dom";

export function Data() {
  const dogUrl = useLoaderData();

  return (
    <h1>
      <img src={dogUrl} alt="" />
    </h1>
  );
}

export const dataLoader = async () => {
  const res = await fetch("https://random.dog/woof.json");
  const dog = await res.json();
  return dog.url;
};
