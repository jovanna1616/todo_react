import { createStore } from 'redux'
import userApp from './reducers'

const store = createStore(userApp)

export default store

