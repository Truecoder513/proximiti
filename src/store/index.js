import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import thunk from "redux-thunk";
import modalReducer from "./reducers/modalReducer";

let appStore = createStore(
  combineReducers({
    modals: modalReducer,
  }),
  applyMiddleware(thunk)
);

export default appStore;
