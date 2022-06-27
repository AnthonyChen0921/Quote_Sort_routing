import { Route, Switch, Redirect } from "react-router-dom";
import AllQuotes from "./Pages/AllQuotes";
import NewQuotes from "./Pages/NewQuotes";
import QuoteDetail from "./Pages/QuoteDetail";
import Layout from "./components/layout/Layout";
import Notfound from "./Pages/NotFound";

//Switch => Routes
//Redirect => Navigate
function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/quotes" />
        </Route>
        <Route path="/quotes" component={AllQuotes} exact />
        <Route path="/quotes/:quoteId" component={QuoteDetail} />
        <Route path="/add-a-quote" component={NewQuotes} />
        <Route path="*" component={Notfound} />
      </Switch>
    </Layout>
  );
}

export default App;
