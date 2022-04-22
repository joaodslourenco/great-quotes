import React from 'react'
import { Route } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import Comments from '../components/comments/Comments'

const QuoteDetail = () => {
  const { quoteId } = useParams()
  return (
    <div>
      QuoteDetail
      <p>{quoteId}</p>
      <Route path={`/quotes/${quoteId}/comments`}>
        <Comments />
      </Route>
    </div>
  )
}

export default QuoteDetail
