import {combineReducers, legacy_createStore as createStore} from "redux";
import {AppReducer} from "./AppReducer";


const AppRootReducer = combineReducers({
    appReducer: AppReducer
})

export const store = createStore(AppRootReducer)

type AppRootReducerType = ReturnType<typeof AppRootReducer>