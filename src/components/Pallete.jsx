import { PalleteCard } from "./PalleteCard";
// import { colors } from "../data/colors";
import { PalleteContext } from "../context/PalleteContext";
import { useContext } from "react";

export function Pallete() {
  const {colors} = useContext(PalleteContext)

  if (colors.length === 0) {
    return (
      <h1>You don't have any saved color</h1>
    )
  }

  return (
    <>
    <h1>My Pallete</h1>
      <div className="grid">
        {colors.map((color) => (
          <PalleteCard color={color} key={color.id} />
        ))}
      </div>
    </>
  );
}

export default Pallete;
