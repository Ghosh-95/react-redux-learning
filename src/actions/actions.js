import axios from "axios";

const inc = 'account/increment', dec = 'account/decrement', incByAmt = 'account/incrementByAmt', getUserAccPending = 'account/getUser/pending', getUserAccFulfilled = 'account/getUser/fulfilled', getUserAccRejected = 'account/getUser/rejected';
const incBonus = 'bonus/increment', decBonus = 'bonus/decreement';


// Action creators
const increment = () => ({ type: inc });
const incrementBonus = () => ({ type: incBonus });
const incrementByAmt = (value) => ({ type: incByAmt, payload: value });
const decrement = () => ({ type: dec });
function getUserAccount(id) {
    return async (dispatch, getState) => {
        try {
            dispatch(initUserAccPending());
            console.log("post loading...");

            const { data } = await axios.get(`http://localhost:3000/accounts/${id}`);
            dispatch(initUserAccFulfilled(data.amount));
            // console.log("posts loaded");
        } catch (error) {
            dispatch(initUserAccRejected(error.message));
            // console.log("data fetching failed");
        }
    }
};
const initUserAccFulfilled = (value) => ({ type: getUserAccFulfilled, payload: value });
const initUserAccPending = () => ({ type: getUserAccPending });
const initUserAccRejected = (error) => ({ type: getUserAccRejected, error: error });

export { inc, dec, incBonus, incByAmt, getUserAccFulfilled, getUserAccPending, getUserAccRejected, decBonus, increment, incrementBonus, incrementByAmt, decrement, getUserAccount, initUserAccFulfilled, initUserAccPending, initUserAccRejected };