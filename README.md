# React Redux

When you add a listener to an element, and trigger to dispatch an action by certain events, store dispatches the action. The action goes to the reducer, reducer updates/modifies the sotre and returns the state.
```js
<button onClick={store.dispatch(newAction())}>Click Me</button>
```
Now the store may got update, but React will never update the value in the UI unless some React's state changed. But here the global state changes. So react will never trigger a re-render.

To fix this issue, there is a library callled `React-Redux`. It does exactly what react doesn't in terms of updating the UI when the global state changes. React-redux triggers re-renders the whole app everytime the global state changes.