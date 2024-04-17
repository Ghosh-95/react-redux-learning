import { useState } from "react"

export default function Account() {
    const [account, setAccount] = useState({ amount: 0 });
    const [value, setValue] = useState(0);

    const increment = () => setAccount({ amount: account.amount + 1 });
    const decrement = () => setAccount({ amount: account.amount - 1 });

    const incrementByAmount = () => setAccount({ amount: account.amount + value });

    return (
        <div className="account-wrapper">
            <h4 className="head-point">Account Component</h4>
            <p className="highlight-amount">Amount: ${account.amount}</p>
            <button onClick={increment}>Increment</button>
            <input
                onChange={(e) => setValue(+e.target.value)} onKeyDown={(e) => e.key === "Enter" && incrementByAmount()}
                type="text"
                name="input-amount"
                id="inp-amount" />
            <button onClick={decrement}>Decrement</button>
            <button onClick={incrementByAmount}>IncrementByAmount</button>
        </div>
    )
}