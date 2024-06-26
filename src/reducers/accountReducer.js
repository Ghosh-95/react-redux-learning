import { getUserAccFulfilled, getUserAccPending, getUserAccRejected, inc, dec, incByAmt, decByAmt } from "../actions/actions";

export default function reducerAccounts(state = { amount: 1 }, action) {

    switch (action.type) {
        case getUserAccFulfilled:
            return { amount: action.payload, pending: false };
        case getUserAccPending:
            return { ...state, pending: true };
        case getUserAccRejected:
            return { ...state, error: action.error, pending: false };
        case inc:
            return { amount: state.amount + 1 };
        case dec:
            return { amount: state.amount - 1 };
        case incByAmt:
            return { amount: state.amount + action.payload };
        case decByAmt:
            if (action.payload < state.amount) {
                return { amount: state.amount - action.payload };
            };
        default:
            return state;
    };
};