const initialState = {
  good: 0,
  ok: 0,
  bad: 0
}

const counterReducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case 'GOOD':
      const updatedStateGood = { ...state, good: state.good + 1 }
      return updatedStateGood
    case 'OK':
      const updatedStateOK = { ...state, ok: state.ok + 1 }
      return updatedStateOK
    case 'BAD':
      const updatedStateBad = { ...state, bad: state.bad + 1 }
      return updatedStateBad
    case 'ZERO':
      return initialState
    default: return state
  }

}

export default counterReducer