import { useState } from "react"

export default function Bonus({ bonus, incrementBonus }) {

    return (
        <div className="bonus-wrapper">
            <h4 className="head-point">Bonus Component</h4>
            <p className="highlight-amount">Bonus points: ${bonus.points}</p>
            <button onClick={incrementBonus}>Increment</button>
        </div>
    )
}