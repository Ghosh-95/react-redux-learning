import { useSelector } from "react-redux";
import Account from "./Account";
import Bonus from "./Bonus";

export default function App() {
  const points = useSelector(state => state.bonus.points);
  const account = useSelector(state => state.account);

  return (
    <>
      <h1>Redux with React</h1>
      {account.pending ? <p className="highlight-amount">Loading....</p> : account.error ? <p className="error">{account.error.slice(0, account.error.indexOf('with'))}</p> : <h3 className="highlight-amount">Current amount: ₹{account.amount}</h3>}

      <h3 className="highlight-amount">Total Bonus: {points}</h3>

      <div className="compo-wrapper">
        <Account />
        <Bonus />
      </div>
    </>
  )
}