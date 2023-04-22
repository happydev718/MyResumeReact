/**
 * @author pooh
 * @created 04/22/2023
 * /////////////////////////////////////////////////////////////////////////////////////
 *                      Root Reducer Page ----  Main Reducer Page
 * /////////////////////////////////////////////////////////////////////////////////////
 */
import {
    combineReducers
} from 'redux';
import loginReducer from './loginReducer'

export default combineReducers({
    login : loginReducer
})

