import React from 'react';
import './App.scss';
import UserRegister from './components/UserRegister';
import VideoScreen from './components/VideoScreen';
import {
  BrowserRouter as Router,
  Route,
  useLocation
} from "react-router-dom";
function useQuery() {
  return new URLSearchParams(useLocation().search);
}
function QueryScreen() {
  let query = useQuery();
  return (
    <VideoScreen jwt={query.get("jwt")}/>
  );
}
function App() {
  return (
    <div className="App">
      <Router >
        <Route path="/">
          <QueryScreen/>
        </Route>
      </Router>
    </div>
  );
}

export default App;
