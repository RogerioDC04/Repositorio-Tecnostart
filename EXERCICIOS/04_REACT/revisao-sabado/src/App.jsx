import React from "react";
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import HomeScreen from './screens/home.screen';
import CartoesVisitaScreen from './screens/cartoes-de-visita.screen';
import CartaoVisitaDetalheScreen from './screens/cartao-de-visita-detalhe.creen';

function App() {
  return (
    <Router>

      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/cartoes-visita">Cartões Visita</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/home">
          <HomeScreen />
        </Route>
        <Route path="/cartoes-visita">
          <CartoesVisitaScreen />
        </Route>
        <Route path="/cartao-visita/:id">
          <CartaoVisitaDetalheScreen />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;