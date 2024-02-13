import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import registration from './RegistrationForm/RegistrationForm.js';
import Profile from './RegistrationForm/Profile.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" Component={registration} />
        <Route path="/profile" Component={Profile} />
      </Routes>
    </Router>
  );
}

export default App;
