import {createSlice} from '@reduxjs/toolkit'

export const notificationSlice = createSlice({
  name: 'notification',
  initialState: {
    message: '',
    timeoutID: ''
  },
  reducers: {
    newNotification(state, action) {
      state.message = action.payload
    },
    clearNotification(state, action) {
      state.message = ''
    },
    setTimeoutId(state, action) {
      state.timeoutID = action.payload
    }
  }
})

export const setNotification = (message, time) => {
  return async (dispatch, getState) => {
    const state = getState()
    if (state.notification.message) {
      clearTimeout(state.notification.timeoutID)
    }
    dispatch(newNotification(message))
    const timeoutID = setTimeout(() => {dispatch(clearNotification())}, time * 1000)
    dispatch(setTimeoutId(timeoutID))
  }
}

export const {newNotification, clearNotification, setTimeoutId} = notificationSlice.actions

export default notificationSlice.reducer