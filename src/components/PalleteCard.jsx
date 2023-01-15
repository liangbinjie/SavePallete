import './palleteCard.css'

export function PalleteCard({ color }) {
    return (
        <>
        <div className="card">
            <div className="color-box" style={{backgroundColor: color.hex}}></div>
            <h6>{color.name}</h6>
        </div>
        </>
    )
}