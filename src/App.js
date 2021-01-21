import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';
import Header from './component/Header';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/login" component={Login}/>
      </Switch>
    </Router>
  );
}

export default App;
