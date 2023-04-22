/**
 * @author pooh
 * @created 04/22/2023
 * ///////////////////////////////////////////////////////////////////////////////////////////
 *                        Main entry point of my project ..... App.js
 * ///////////////////////////////////////////////////////////////////////////////////////////
 */
import './App.css';
import {
  Provider
} from 'react-redux';
import {
  store
} from './store/store';

function App() {
  return (
    <>
      <Provider store={store}>
        
      </Provider>
    </>
  );
}

export default App;
