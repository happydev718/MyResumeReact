/**
 * @author pooh
 * @created 04/22/2023
 * //////////////////////////////////////////////////////////////////////////////////////////////////
 *                          Store page for configuring redux saga and thunk
 * //////////////////////////////////////////////////////////////////////////////////////////////////
 */
import {
    createStore,
    applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';

//reducer import 
import rootReducer from './reducer';

export const store =  createStore(rootReducer , applyMiddleware(thunk));