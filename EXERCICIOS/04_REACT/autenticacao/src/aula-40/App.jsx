import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { PageCadastro, PageHome, PageLogin, PageNotFound } from './pages/pages';
import { CADASTRO, HOME, LOGIN, PublicRoute, PrivateRoute } from './routes/routes';


export default function App() {
  return (
    <Router>
      <Switch>
        <PublicRoute exact path={LOGIN} component={PageLogin} />
        <PrivateRoute exact path={HOME} component={PageHome} />
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  );
}
