import './App.css';

import { BrowserRouter as Router,Link, Route, Routes } from "react-router-dom";

import Login from './pages/Login';
import Reset from './pages/Reset';
function App() {
  return (
    <Router>
      <nav style={{ margin: 10 }}>
        <Link to="/" style={{ padding: 5 }}>
          Home
        </Link>
        <Link to="/login" style={{ padding: 5 }}>
          Login
        </Link>
        <Link to="/reset" style={{ padding: 5 }}>
          Reset
        </Link>
      </nav>
  {/* Rest of the code remains same */}

    <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/reset" element={<Reset/>}/>
    </Routes>
</Router>


    
  );
}

export default App;
