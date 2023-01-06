import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import thunk from "redux-thunk";
import menuReducer from "./reducers/menuReducer";
import modalReducer from "./reducers/modalReducer";

let appStore = createStore(
  combineReducers({
    modals: modalReducer,
    menu: menuReducer,
  }),
  applyMiddleware(thunk)
);

export default appStore;
