import NavigationBar from './components/navigation/NavigationBar';
import { Routes, Route } from "react-router-dom";
import Home from './views/home/Home';

import './App.css';
import { Container } from '@mui/material';
import Profile from './views/user/Profile';
import AuthPanel from './components/auth/AuthPanel';

function App() {
  return (
    <div className="App">
      <NavigationBar></NavigationBar>

      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/auth" element={<AuthPanel />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
