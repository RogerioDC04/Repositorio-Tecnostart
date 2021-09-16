import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import MenuNav from '../components/menu-vaigation/MenuNav';
import PageHome from '../pages/home/home'


export default function Routes() {
  return (
    <>
      <Router>
        <MenuNav />

        <Switch>
          <Route path='/' exact>
           <PageHome/>
          </Route>
          <Route path='/sobre' exact>
            <main><h1>SOBRE</h1></main>
          </Route>
          <Route path='/cotato' exact>
            <main><h1>CONTATO</h1></main>
          </Route>
          <Route path='*'>
            <main><h1>PÁGINA NÃO ENCONTRADA</h1></main>
          </Route>
        </Switch>
      </Router>
    </>
  );
}