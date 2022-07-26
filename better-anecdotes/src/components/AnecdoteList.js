import { useSelector, useDispatch } from "react-redux/es/exports"
import { filteredAnecdotes, voteAnecdote } from "../reducers/anecdoteReducer"
import { setNotification, removeNotification } from "../reducers/notificationReducer"
import Filter from "./Filter"

const AnecdoteList = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector(filteredAnecdotes)

  const vote = ({id, content}) => {
    console.log('vote', id)
    dispatch(voteAnecdote(id))
    dispatch(setNotification(`you voted '${content}'`))
    setTimeout(() => {dispatch(removeNotification())}, 5000)
  }
  return (
    <div>
      <Filter />
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AnecdoteList