import { useState } from "react"

export default function Account({ account, increment, incrementByAmount, decrement }) {
    const [value, setValue] = useState(0);

    return (
        <div className="account-wrapper">
            <h4 className="head-point">Account Component</h4>
            <p className="highlight-amount">Amount: ${account.amount}</p>
            <button onClick={increment}>Increment</button>
            <input
                onChange={(e) => setValue(+e.target.value)} onKeyDown={(e) => e.key === "Enter" && incrementByAmount(value)}
                type="text"
                name="input-amount"
                id="inp-amount" />
            <button onClick={decrement}>Decrement</button>
            <button onClick={() => incrementByAmount(value)}>IncrementByAmount</button>
        </div>
    )
}