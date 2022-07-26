import { createAnecdote } from "../reducers/anecdoteReducer"
import { setNotification } from "../reducers/notificationReducer"
import { connect } from "react-redux"

const AnecdoteForm = ({setNotification, createAnecdote}) => {

  const addAnecdote = async (event) => {
    event.preventDefault()
    const anecdote = event.target.anecdote.value
    event.target.anecdote.value = ''
    createAnecdote(anecdote)
    setNotification(`you created '${anecdote}'`, 5)
  }
  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div><input name="anecdote"/></div>
        <button>create</button>
      </form>
    </div>
  )
}

const mapDispatchToProps = {
  setNotification,
  createAnecdote
}

export default connect(null, mapDispatchToProps)(AnecdoteForm)