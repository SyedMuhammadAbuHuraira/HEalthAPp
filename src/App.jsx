import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import { patient } from './constants';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div style={{ width: '100%', height: '100vh', margin: '0', padding: '0', overflow: 'hidden' }}>
              <iframe
                src="/signin.html"
                width="100%"
                height="100%"
                style={{ border: 'none', margin: '0', padding: '0' }}
                title="Sign In"
              />
            </div>
          }
        />
        <Route
          path="/dashboard"
          element={
            <div className="bg-transparent">
              <Header details={patient[0]} />
              <div className="flex mt-20">
                <div>
                  <Sidebar />
                </div>
                <div className="w-full">
                  <Dashboard />
                </div>
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
