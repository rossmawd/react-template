import { configureStore } from "@reduxjs/toolkit";
import { type AppAction } from "./navCount";

const initialState = {
  navCount: 0,
};

export type AppState = {
  navCount: number;
};

// interface ExampleAction {
//   type: string;
//   payload: {
//     // Define the properties and their types for the action payload
//     // Example:
//     userId: string;
//     username: string;
//   };
// }

// function rootReducer(state = initialState, action: ExampleAction) {
//   switch (action.type) {
//   default:
//     return state;
//   }
// }

export const rootReducer = (
  state: AppState = initialState,
  action: AppAction
): AppState => {
  switch (action.type) {
    // existing cases...
    case "INCREMENT_NAVIGATION_COUNT":
      return {
        ...state,
        navCount: state.navCount + 1,
      };
    default:
      return state;
  }
};

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
