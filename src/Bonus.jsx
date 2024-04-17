import { useState } from "react"

export default function Bonus() {
    const [bonus, setBonus] = useState({ points: 0 });

    return (
        <div className="bonus-wrapper">
            <h4 className="head-point">Bonus Component</h4>
            <p className="highlight-amount">Bonus Amount: ${bonus.points}</p>
            <button onClick={() => setBonus({ points: bonus.points + 1 })}>Increment</button>
        </div>
    )
}