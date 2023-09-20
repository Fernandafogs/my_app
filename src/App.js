import {
  BrowserRouter as Router,
  Switch, 
  Route
} from 'react-router-dom';

import TemplateDefault from './templates/Default';
import TemplatePage from './templates/Page';
import TemplateClean from './templates/Clean';

import CustomersList from './pages/customers/List';
import CustomersEdit from './pages/customers/Edit';
import CustomersRegister from './pages/customers/Register';
import Home from './pages/Home';
import Login from './pages/Login';

const App = () => { 
return (
  <Router>
    <Switch>
      <Route path="/login">
          <TemplateClean  title="Acesso restrito" Component={Login} />
      </Route>
      <TemplateDefault>  
        <Route exact path="/customers/edit/:id">
          <TemplatePage  title="Editar Clientes" Component={CustomersEdit} />
        </Route>
        <Route exact path="/customers/add">
          <TemplatePage  title="Cadastro de Clientes" Component={CustomersRegister} />
        </Route>
        <Route exact path="/customers">
          <TemplatePage  title="Lista de Clientes" Component={CustomersList} />
        </Route>
        <Route exact path="/">
          <TemplatePage  title="Página Inicial" Component={Home}  />
        </Route>
      </TemplateDefault>
    </Switch>
  </Router> 
  
);
}

export default App; 