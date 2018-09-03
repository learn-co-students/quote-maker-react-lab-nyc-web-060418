// TODO: Create action creators as defined in tests
export const addQuote = quote => {
  return {
    type: 'ADD_QUOTE',
    quote: quote
  }
}

export const removeQuote = id => {
  console.log("removing:", id);
  return {
    type: 'REMOVE_QUOTE',
    quoteId: id
  }
}

export const upvoteQuote = id => {
  console.log("upvoting:", id);
  return {
    type: 'UPVOTE_QUOTE',
    quoteId: id
  }
}

export const downvoteQuote = id => {
  console.log("downvoting:", id);
  return {
    type: 'DOWNVOTE_QUOTE',
    quoteId: id
  }
}
