import './App.css';
import Login from './login/Login.js';
import Profile from './Profile/Profile.js';
import ProfileDetail from './Profile/ProfileDetail.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" Component={Login} />
        <Route path="/profilelist" Component={Profile} />
        <Route path="/profile/:id" Component={ProfileDetail} />
      </Routes>
    </Router>
  );
}

export default App;
