import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';
import Header from './component/Header/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Upload from './pages/Upload/Upload';
import { CanvasProvider } from './context/CanvasContext';

function App() {
  return (
    
      <Router>
        <Header />
        <Switch>
        <CanvasProvider>
          <Route path="/" exact component={Home}/>
          <Route path="/login" component={Login}/>
          <Route path="/upload" component={Upload}/>
        </CanvasProvider>
        </Switch>
      </Router>
    
  );
}

export default App;
