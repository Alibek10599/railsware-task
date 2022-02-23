import './App.css';

import { BrowserRouter as Router,Link, Route, Routes } from "react-router-dom";

import Login from './pages/Login';
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
      </nav>
  {/* Rest of the code remains same */}

    <Routes>
        <Route path="/login" element={<Login/>}/>
    </Routes>
</Router>


    
  );
}

export default App;
