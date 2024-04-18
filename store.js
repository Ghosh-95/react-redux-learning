import { applyMiddleware, combineReducers } from "redux";
import { createStore } from "redux";
import reducerAccounts from "./src/reducers/accountReducer";
import reducerBonuses from "./src/reducers/bonusReducer";
import logger from "redux-logger";
import { thunk } from "redux-thunk";

const store = createStore(
    combineReducers({
        account: reducerAccounts,
        bonus: reducerBonuses,
    }),
    applyMiddleware(logger, thunk)
);

export default store;