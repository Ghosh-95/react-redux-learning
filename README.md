# React Redux

When you add a listener to an element, and trigger to dispatch an action by certain events, store dispatches the action. The action goes to the reducer, reducer updates/modifies the sotre and returns the state.
```js
<button onClick={store.dispatch(newAction())}>Click Me</button>
```
Now the store may got update, but React will never update the value in the UI unless some React's state changed. But here the global state changes. So react will never trigger a re-render.

To fix this issue, there is a library callled `React-Redux`. It does exactly what react doesn't in terms of updating the UI when the global state changes. React-redux triggers re-renders the whole app everytime the global state changes.

Install React-redux:
```bash
npm i react-redux
```
Import 'Provider' from react-redux, and pass the store as store props inside it. Wrap your whole app with Provider component. Now entire app can access the store from anywhere it needs.
```js
<Provider store={store}>
    <App />
</Provider>
```
use `useSelector` hook from 'react-redux' to subsribe to the store and get access to the global state. This hook takes a callback function as parameter, and that function can access the global state of the store.
```js
const amount = useSelector(state => state.account.amount);
```
To dispatch an action on some events, use `useDispatch` hook, it doesn't take any parameter and returns a function. You can dispatch any action inside that function.
```js
const dispatch = useDispatch();

// from previous example. ❌
<button onClick={store.dispatch(newAction())}>Click Me</button>

// using dispatch
<button onClick={() => dispatch(newAction())}>Click Me</button>

```