import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import RightSidebar from './components/RightSidebar';
import Login from './pages/Login';
import Signup from './pages/Signup';

import Mentors from './pages/Mentors';
import Discussions from './pages/Discussions';
import Messages from './pages/Messages';
import Bookings from './pages/Bookings';

import AuthProvider from './context/AuthContext';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="app">
          <Header />
          <div className="app-body">
            <Sidebar />
            <Routes>
              <Route path="/" element={<MainContent />} />
              <Route path="/mentors" element={<Mentors />} />
              <Route path="/discussions" element={<Discussions />} />
              <Route path="/messages" element={<Messages />} />
              <Route path="/bookings" element={<Bookings />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
            <RightSidebar />
          </div>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
