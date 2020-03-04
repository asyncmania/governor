function createStore() {

  // The store should have foru parts
  // 1. The state
  // 2. Get the state
  // 3. Listen to changes on the state.
  // 4. update the state

  let state, listeners = [];

  const getState = () => state
  
  const subscribe = (listener) => {
     listeners.push(listener)
     return () => {
       listeners = listeners.filter((l) => l !== listeners)
     }
  }

  return {
    getState,
    subscribe,
  }
}