import './App.css';
import Login from './pages/Login';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">

    <Login />
    <Routes>
      <Route exact path='/' element={<Login />} />
    </Routes>

    </div>
  );
}

export default App;
