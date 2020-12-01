import { combineReducers } from 'redux'
import { userReducer } from './userReducer'
import { cartReducer } from './cartReducer'

//Multiple reducers 

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,

})

export default rootReducer;