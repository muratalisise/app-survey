import './App.css';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./Pages/index";
import React from 'react';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index element={<Index />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
