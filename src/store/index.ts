import { configureStore } from "@reduxjs/toolkit";
// import rootReducer from "./reducers";

const initialState = {};

function rootReducer(state = initialState, action: any) {
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