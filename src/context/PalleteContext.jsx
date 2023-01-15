import { createContext, useEffect, useState } from "react";
import {colors as data} from '../data/colors'

export const PalleteContext = createContext()

export function PalleteContextProvider(props) {
    const [colors, setColors] = useState([])

    useEffect(() => {
        setColors(data)
    }, [])

    function createPallete(color) {
        setColors([...colors, {
            id: colors.length,
            hex: color.hex,
            name: color.name
        }])
    }

    return (
        <PalleteContext.Provider value={{
            colors,
            createPallete
        }}>
            {props.children}
        </PalleteContext.Provider>
    )


}

