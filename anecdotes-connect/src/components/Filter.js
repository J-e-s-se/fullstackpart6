import { setFilter } from '../reducers/filterReducer'
import { connect } from 'react-redux'

const Filter = ({setFilter}) => {

  const handleChange = ({target}) => {
    setFilter(target.value)
  }

  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  )
}

const matchDispatchToProps = {
  setFilter
}

export default connect(null, matchDispatchToProps)(Filter)