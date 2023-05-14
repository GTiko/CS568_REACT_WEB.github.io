export default function FavoriteHTML() {
  const root = document.getElementById("root");
  const div = document.createElement("div");
  div.innerHTML = "FavoriteHTML";
  return root.append(div);
}