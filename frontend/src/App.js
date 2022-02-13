import AllUsers from './Component/AllUsers';
import AddUser from './Component/AddUser';
import EditUser from './Component/EditUser';
import NavBar from './Component/NavBar';
import NotFound from './Component/NotFound'; 
import { BrowserRouter, Route, Switch,Redirect } from 'react-router-dom';
import ShowPlace from './Component/ShowPlace';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={AllUsers} />
        
        <Route exact path="/all" component={AllUsers} />
        <Route exact path="/new" component={AddUser} />
        <Route exact path="/edit/:id" component={EditUser} />
        <Route exact path="/show/:id" component={ShowPlace} />
        <Route component={NotFound} />
        <Redirect to="/" component={AllUsers} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
