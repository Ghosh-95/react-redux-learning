import Account from "./Account";
import Bonus from "./Bonus";

import { useState } from "react";

export default function App({ store }) {
  const storeState = store.getState();

  // accounts
  const [account, setAccount] = useState({ amount: 0 });

  const increment = () => setAccount({ amount: account.amount + 1 });
  const decrement = () => setAccount({ amount: account.amount - 1 });

  const incrementByAmount = (value) => setAccount({ amount: account.amount + value });

  return (
    <>
      <h1>Redux with React</h1>
      <h3 className="highlight-amount">Current amount: ₹{storeState.account.amount}</h3>
      <h3 className="highlight-amount">Total Bonus: ₹{storeState.bonus.points}</h3>

      <div className="compo-wrapper">
        <Account account={account} increment={increment} incrementByAmount={incrementByAmount} decrement={decrement} />
        <Bonus store={store} />
      </div>
    </>
  )
}