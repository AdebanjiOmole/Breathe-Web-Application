import * as React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Registration from './pagesfolder/registration';
import Login from './pagesfolder/login';
import Home from './pagesfolder/home';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
