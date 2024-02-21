// App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Landing from './pages/Landing';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div className="container-fluid">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
