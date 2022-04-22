import React from 'react'
import { Route } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import Comments from '../components/comments/Comments'
import HighlightedQuote from '../components/quotes/HighlightedQuote'

const QuoteDetail = () => {
  const { quoteId } = useParams()

  const DUMMY_QUOTES = [
    { id: 'q1', author: 'Max', text: 'Learning React is fun!' },
    { id: 'q2', author: 'Maxilian', text: 'Learning React is great!' }
  ]
  const quote = DUMMY_QUOTES.find(quote => quote.id === quoteId)

  if (!quote) {
    return <p>No quote found!</p>
  }
  return (
    <div>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`/quotes/${quoteId}/comments`}>
        <Comments />
      </Route>
    </div>
  )
}

export default QuoteDetail
