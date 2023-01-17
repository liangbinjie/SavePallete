import './palleteCard.css'
import { useContext } from 'react'
import { PalleteContext } from '../context/PalleteContext'

export function PalleteCard({ color }) {
    const {deleteCard} = useContext(PalleteContext)
    return (
        <>
        <div className="card">
            <div className="color-box" style={{backgroundColor: color.hex}}></div>
            <h6 id={color.hex}>{color.hex}</h6>
            <h6>{color.name}</h6>
            <div>
                {/* <button>Copy</button> */}
                <button onClick={() => deleteCard(color.id)}>Delete</button>
            </div>
        </div>
        </>
    )
}