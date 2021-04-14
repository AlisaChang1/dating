import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './HomePage/Home';

const App = () => {
  return (
    <div>
      <Switch>
        <Route path='/' component={Home}/>
      </Switch>
    </div>
  );
}

export default App;
