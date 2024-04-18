import { useDispatch, useSelector } from 'react-redux';
import { incrementBonus } from './actions/actions.js';

export default function Bonus() {
    const points = useSelector(state => state.bonus.points);
    const dispatch = useDispatch();

    return (
        <div className="bonus-wrapper">
            <h4 className="head-point">Bonus Component</h4>
            <p className="highlight-amount">Bonus points: {points}</p>
            <button onClick={() => dispatch(incrementBonus())}>Increment</button>
        </div>
    )
}