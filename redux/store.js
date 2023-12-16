import reducerCart from "./reducers/reducerCart";
import reducerCourses from "./reducers/reducerCourses";
import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import reducerPayment from "./reducers/reducerPayment";

const rootReducer = combineReducers({
  courses: reducerCourses,
  cart: reducerCart,
  payment: reducerPayment,
});

const store = configureStore({
  reducer: rootReducer,
  // middleware: [
  //   ...getDefaultMiddleware({
  //     immutableCheck: false, // Disable the ImmutableStateInvariantMiddleware
  //     serializableCheck: false, // You can disable the SerializableStateInvariantMiddleware too
  //   }),
  // ],
});

export default store;
