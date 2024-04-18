import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, decrementByAmt, getUserAccount, increment, incrementByAmt } from "./actions/actions.js";

export default function Account() {
    const [value, setValue] = useState(0);
    const [decValue, setDecValue] = useState(0);
    const [userId, setUserId] = useState(0);

    const amount = useSelector(state => state.account.amount);
    const dispatch = useDispatch();

    return (
        <div className="account-wrapper">
            <h4 className="head-point">Account Component</h4>
            <p className="highlight-amount">Amount: ₹{amount}</p>
            <button className="btn" onClick={() => dispatch(increment())}>Increment</button>
            <button className="btn" onClick={() => dispatch(decrement())}>Decrement</button>

            <div className="increment-value">
                <input
                    onChange={(e) => setValue(+e.target.value)} onKeyDown={(e) => e.key === "Enter" && dispatch(incrementByAmt(value))}
                    type="text"
                    name="input-amount"
                    id="inp-amount" />
                <button onClick={() => dispatch(incrementByAmt(value))}>IncrementByAmount</button>
            </div>

            <div className="decrement-value">
                <input type="number" onChange={(e) => setDecValue(e.target.value)} name="decrement-amount" id="dec-amt" />
                <button onClick={() => dispatch(decrementByAmt(decValue))}>DecrementByAmt</button>
            </div>

            <div className="async-ops">
                <input onChange={(e) => setUserId(e.target.value)} type="number" name="user-id" id="account-id" />
                <button onClick={() => dispatch(getUserAccount(userId))}>Get User</button>
            </div>
        </div>
    )
}