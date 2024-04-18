import Account from "./Account";
import Bonus from "./Bonus";


export default function App() {

  return (
    <>
      <h1>Redux with React</h1>
      <h3 className="highlight-amount">Current amount: ₹{storeState.account.amount}</h3>
      <h3 className="highlight-amount">Total Bonus: ₹{storeState.bonus.points}</h3>

      <div className="compo-wrapper">
        <Account />
        <Bonus />
      </div>
    </>
  )
}