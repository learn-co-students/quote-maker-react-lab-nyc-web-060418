

export default (state = [], action) => {
  switch (action.type) {

    case 'ADD_QUOTE':
      return [
        ...state,
        {
          id: action.quote.id,
          content: action.quote.content,
          author: action.quote.author,
          votes: 0
        }
      ]

    case 'REMOVE_QUOTE':
      const quotesDup = [...state]
      return quotesDup.filter(quote => quote.id !== action.quoteId)

    case 'UPVOTE_QUOTE':

      const foundQuote = state.find(el => el.id === action.quoteId)
      const filteredQuotes = [...state].filter(el => el.id !== foundQuote.id);
      foundQuote.votes += 1;
      return [
        ...filteredQuotes,
        foundQuote
      ]

    case 'DOWNVOTE_QUOTE':

      const downQuote = state.find(el => el.id === action.quoteId)
      const filtQuotes = [...state].filter(el => el.id !== downQuote.id);
      if (downQuote.votes > 0) {
        downQuote.votes -= 1;
      }

      return [
        ...filtQuotes,
        downQuote
      ]

    default:
      return state;
  }
}
