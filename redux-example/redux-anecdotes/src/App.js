import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { voteClick, createAnecdote } from './reducers/anecdoteReducer'

const App = () => {

  // 
  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()

  const vote = (id) => {
    dispatch(voteClick(id))
    }

  const AddAnnecdote = (event) => {
    event.preventDefault()
    const content = event.target.annecdote.value
    event.target.annecdote.value = ''
    dispatch(createAnecdote(content))
  }
  


  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
      <h2>create new</h2>
      <form onSubmit={AddAnnecdote}>
        <div><input name="annecdote" /></div>
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default App