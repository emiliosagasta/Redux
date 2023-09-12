import {legacy_createStore as createStore, combineReducers} from "redux";
import amountReducer from "./amount/reducer";

const reducers = combineReducers({
    amountReducer,
});

const store = createStore(
    reducers,
    window.__redux_devtools_extension_compose__ && window.__redux_devtools_extension_compose__()
    );

export default store;