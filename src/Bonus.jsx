import { incrementBonus } from './actions/actions.js';

export default function Bonus({ store }) {

    return (
        <div className="bonus-wrapper">
            <h4 className="head-point">Bonus Component</h4>
            <p className="highlight-amount">Bonus points: ${store.getState().bonus.points}</p>
            <button onClick={() => store.dispatch(incrementBonus())}>Increment</button>
        </div>
    )
}