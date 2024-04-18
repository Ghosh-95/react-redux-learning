import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmt } from "./actions/actions.js";

export default function Account() {
    const [value, setValue] = useState(0);
    const amount = useSelector(state => state.account.amount);
    const dispatch = useDispatch();

    return (
        <div className="account-wrapper">
            <h4 className="head-point">Account Component</h4>
            <p className="highlight-amount">Amount: ${amount}</p>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <input
                onChange={(e) => setValue(+e.target.value)} onKeyDown={(e) => e.key === "Enter" && dispatch(incrementByAmt(value))}
                type="text"
                name="input-amount"
                id="inp-amount" />
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <button onClick={() => dispatch(incrementByAmt(value))}>IncrementByAmount</button>
        </div>
    )
}