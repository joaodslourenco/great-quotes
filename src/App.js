import { Redirect } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { Switch } from 'react-router-dom'
import Layout from './components/layout/Layout'
import AllQuotes from './pages/AllQuotes'
import NewQuote from './pages/NewQuote'
import QuoteDetail from './pages/QuoteDetail'

function App() {
  return (
    <Layout>
      <Switch>
        {/* <Route path="/">
          <Redirect to="/quotes" />
        </Route> */}
        <Route exact path="/quotes">
          <AllQuotes />
        </Route>
        <Route path="/quotes/:quoteId">
          <QuoteDetail />
        </Route>
        <Route path="/new-quote">
          <NewQuote />
        </Route>
      </Switch>
    </Layout>
  )
}

export default App
