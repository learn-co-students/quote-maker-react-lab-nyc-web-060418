export default (state = [], action) => {
  let newState;
  switch (action.type) {
    case 'ADD_QUOTE':
      return [...state, action.quote]
    case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id !== action.quoteId)
    case 'UPVOTE_QUOTE':
      newState = [...state]
      newState.forEach(quote =>{
        if (quote.id === action.quoteId){
          quote.votes++
        }
      })
      return newState
    case 'DOWNVOTE_QUOTE':
      newState = [...state]
      newState.forEach(quote =>{
        if (quote.id === action.quoteId && quote.votes > 0){
          quote.votes--
        }
      })
      return newState
    default:
      return state;
  }
}
