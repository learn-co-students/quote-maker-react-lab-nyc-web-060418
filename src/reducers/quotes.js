export default function quoteReducer(state = [], action) {
  let idx;
  let newQuote;
  let newState;

  switch (action.type) {
    case "ADD_QUOTE":
      return [...state, action.quote]
    case "REMOVE_QUOTE":
      idx = state.map(quote => {return quote.quoteId}).indexOf(action.quoteId)
      return [...state.slice(0, idx), ...state.slice(idx + 1)]
    case "UPVOTE_QUOTE":
      idx = state.map(quote => {return quote.quoteId}).indexOf(action.quoteId)
      newQuote = state[idx]
      newQuote.votes = newQuote.votes + 1
      newState = [...state.slice(0, idx), ...state.slice(idx + 1)]
      newState.push(newQuote)
      return newState
    case "DOWNVOTE_QUOTE":
      idx = state.map(quote => {return quote.quoteId}).indexOf(action.quoteId)
      newQuote = state[idx]
      newQuote.votes = newQuote.votes - 1
      newState = [...state.slice(0, idx), ...state.slice(idx + 1)]
      newState.push(newQuote)
      return newState
    default:
      return state;
  }
}
