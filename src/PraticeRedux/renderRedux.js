import React from 'react'
import { Provider } from 'react-redux';
import store from '../ReduxToolKit/store';
import Counter from './counter';

const Redux = () => {
  return (
        <Provider store={store}>
         <Counter/> 
        </Provider>
  )
}

export default Redux;