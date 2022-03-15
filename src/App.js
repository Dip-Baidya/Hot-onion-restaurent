import './App.css';
import Header from './Components/Shared/Header/Header';
import Home from './Components/Home/Home';
import Footer from './Components/Shared/Footer/Footer';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from './Components/Login/Login';
import AuthProvider from './contexts/AuthProvider';
import NotFound from './Components/NotFound/NotFound';
import Register from './Components/Login/Register/Register';

function App() {
  return (
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer> </Footer>
        </Router>
      </AuthProvider>

  );
}

export default App;
