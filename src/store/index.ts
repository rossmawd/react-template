import { configureStore } from '@reduxjs/toolkit';

const initialState = {};

interface ExampleAction {
  type: string;
  payload: {
    // Define the properties and their types for the action payload
    // Example:
    userId: string;
    username: string;
  };
}

function rootReducer(state = initialState, action: ExampleAction) {
  switch (action.type) {
  default:
    return state;
  }
}

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;