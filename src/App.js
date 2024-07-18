import './App.css';
import { useContext } from 'react';
import Login from './Components/Login';
import UserContext from './Components/UserContext';
import Home from './Components/Home';

function App() {

  const { user } = useContext(UserContext);
  return user ? <Home /> : <Login />;

}

export default App;
