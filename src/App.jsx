// src/App.js
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from './toggle/ThemeContext';
import AppContent from './AppContent';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}

export default App;
