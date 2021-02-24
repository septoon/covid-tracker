import {  applyMiddleware, combineReducers, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import covidReducer from './covid-reducer'

let reducers = combineReducers({
    covidData: covidReducer
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store