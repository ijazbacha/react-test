import { configureStore } from '@reduxjs/toolkit'
import { reducer as formReducer } from 'redux-form'
import  counterSlice  from './features/counter/CounterSlice'


export const store = configureStore({
  reducer: {
    form: formReducer,
    counter: counterSlice
  },
})