import { PalleteCard } from "./PalleteCard";
import { PalleteContext } from "../context/PalleteContext";
import { useContext } from "react";

export function Pallete() {
  const { colors } = useContext(PalleteContext);
  let ls = JSON.parse(localStorage.colors); // local storage.colors

  if (ls === null) {
    localStorage.setItem("colors", "[]");
  }

  if (colors.length === 0) {
    return <h1>You don't have any saved color</h1>;
  } Msalsa 

  return (
    <>
      <h1>My Pallete</h1>
      <div className="grid">
        {ls.map((color) => (
          <PalleteCard color={color} key={color.id} />
        ))}
      </div>
    </>
  );
}

export default Pallete;
