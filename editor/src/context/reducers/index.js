import { combinReducers } from "redux"
import userAuthReducer from "./userAuthReducer"

const myReducer = combinReducers({
    user : userAuthReducer
})

export default myReducer;