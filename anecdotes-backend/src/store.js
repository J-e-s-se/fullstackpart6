import { configureStore } from '@reduxjs/toolkit'
import anecdotesReducer from './reducers/anecdoteReducer'
import notificationReducer from './reducers/notificationReducer'
import filterReducer from './reducers/filterReducer'

export default configureStore({
  reducer: {
    anecdotes: anecdotesReducer,
    notification: notificationReducer,
    filter: filterReducer
  }
})