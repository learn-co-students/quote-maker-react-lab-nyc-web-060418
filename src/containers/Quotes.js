import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import {upvoteQuote, downvoteQuote, removeQuote} from '../actions/quotes';

class Quotes extends Component {

  mapToQuoteCards = () => {
    return this.props.quotes.map((quote) => {
      return <QuoteCard key={quote.id}
      id={quote.id}
      quote={quote} handleRemoveQuote={this.handleRemoveQuote}
      handleupvoteQuote={this.handleupvoteQuote}
      handledownvoteQuote={this.handledownvoteQuote}
      />
    })
  }

  handleRemoveQuote = (e) => {
    e.preventDefault()
    this.props.removeQuote(e.target.id)
  }

  handleupvoteQuote = (e) => {
    e.preventDefault()
    this.props.upvoteQuote(e.target.id)
  }

  handledownvoteQuote = (e) => {
    e.preventDefault()
    this.props.downvoteQuote(e.target.id)
  }


  render() {
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <ul>
              {
                this.mapToQuoteCards()
                }
               </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

/*
Render Quotes With QuoteCard component and pass down callback props for removing, upvoting and downvoting quotes
*/

const mapStateToProps = (state) => {
  return {
    quotes: state.quotes
  }
}

const mapDispatchToProps = (dispatch) => {
  return({
    removeQuote: (quoteId) => {
      dispatch(removeQuote(quoteId))
    },
    upvoteQuote: (quoteId) => {
      dispatch(upvoteQuote(quoteId))
    },
    downvoteQuote: (quoteId) => {
      dispatch(downvoteQuote(quoteId))
    }
  });
}

//add arguments to connect as needed
export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
