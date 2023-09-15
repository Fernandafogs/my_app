import {
  BrowserRouter as Router,
  Switch, 
  Route
} from 'react-router-dom';

import TemplateDefault from './templates/Default';
import TemplatePage from './templates/Page';


import CustomersList from './pages/customers/List';
import CustomersEdit from './pages/customers/Edit';
import CustomersRegister from './pages/customers/Register';
import Home from './pages/Home';



const App = () => { 
return (
  <Router>
    <TemplateDefault>
      <Switch>
      <Route path="/customers/edit/:id">
          <TemplatePage key="2" title="Editar Clientes" Component={CustomersEdit} />
        </Route>
        <Route path="/customers/add">
          <TemplatePage key="2" title="Cadastro de Clientes" Component={CustomersRegister} />
        </Route>
        <Route path="/customers">
          <TemplatePage key="2" title="Lista de Clientes" Component={CustomersList} />
        </Route>
        <Route path="/">
          <TemplatePage key="1" title="Página Inicial" Component={Home}  />
        </Route>
      </Switch>
    </TemplateDefault>
  </Router> 
  
);
}

export default App; 