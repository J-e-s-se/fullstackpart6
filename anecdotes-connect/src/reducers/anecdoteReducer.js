import { createSlice, createSelector } from "@reduxjs/toolkit"
import { selectFilter } from "./filterReducer"
import anecdotesServices from "../services/anecdotes"

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}


const anecdotesSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    
    newAnecdote(state, action) {
      state.push(action.payload)
    },

    updateAnecdote(state, action) {
      const {id} = action.payload
      return state.filter(val => val.id !== id).concat(action.payload)
    },

    setAnecdotes(state, action) {
      return action.payload
    }
  }
})

export const orderedAnecdotes = (state) => {
  return [...state.anecdotes].sort((a, b) => b.votes - a.votes)
}

export const filteredAnecdotes = createSelector(
  [orderedAnecdotes, selectFilter], (anecdotes, filter) => (
    anecdotes.filter(anecdote => anecdote.content.includes(filter))
  )
)
export const { newAnecdote, setAnecdotes, updateAnecdote } = anecdotesSlice.actions

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdotesServices.list()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const createAnecdote = (anecdote) => {
  return async dispatch => {
    const response = await anecdotesServices.create(asObject(anecdote))
    dispatch(newAnecdote(response))
  }
}

export const voteAnecdote = (id) => {
  return async (dispatch, getState) => {
      const state = getState()
      const anecdote = state.anecdotes.find(anecdote => anecdote.id === id)
      const data = {...anecdote}
      ++data.votes
      const response = await anecdotesServices.update(data)
      dispatch(updateAnecdote(response))
  }
}


export default anecdotesSlice.reducer