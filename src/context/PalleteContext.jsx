import { createContext, useEffect, useState } from "react";
export const PalleteContext = createContext();

export function PalleteContextProvider(props) {
  const [colors, setColors] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("colors");
    if (saved === null) {
      return localStorage.setItem("colors", "[]");
    } else {
      return JSON.parse(saved);
    }
  });

  useEffect(() => {
    localStorage.setItem("colors", JSON.stringify(colors));
  }, []);

  function createPallete(color) {
    const existing_data = JSON.parse(localStorage.colors);
    const list = [
      ...existing_data,
      {
        id: existing_data.length,
        hex: color.hex,
        name: color.name,
      },
    ];
    setColors(list);

    localStorage.setItem("colors", JSON.stringify(list));
    setColors(localStorage.colors);
  }

  function deleteCard(id) {
    const current = JSON.parse(localStorage.colors)
    localStorage.setItem("colors", JSON.stringify(current.filter(color => color.id != id)))
    setColors(localStorage.colors)
  }

  return (
    <PalleteContext.Provider
      value={{
        colors,
        createPallete,
        deleteCard
      }}
    >
      {props.children}
    </PalleteContext.Provider>
  );
}
