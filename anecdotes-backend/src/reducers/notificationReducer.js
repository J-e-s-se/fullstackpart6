import {createSlice} from '@reduxjs/toolkit'

const initialState = ''

export const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    newNotification(state, action) {
      return action.payload
    },
    clearNotification(state, action) {
      return ''
    }
  }
})

export const setNotification = (message, time) => {
  return async dispatch => {
    dispatch(newNotification(message))
    setTimeout(() => {dispatch(clearNotification())}, time * 1000)
  }
}

export const {newNotification, clearNotification} = notificationSlice.actions

export default notificationSlice.reducer