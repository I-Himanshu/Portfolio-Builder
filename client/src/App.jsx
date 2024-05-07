import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Create from './pages/Create';
import ProfileContextProvider from './contexts/ProfileContext';
import RenderTerminal from './pages/RenderTerminal';
import Users from './pages/Users';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';



function App() {

  return (
    <Router>
          <Routes>

            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/users" element={<Users />} />
              <Route path="/create" element={
                <ProfileContextProvider>
                  <Create />
                </ProfileContextProvider>
              } />

            </Route>
            <Route path='/t/:username' element={<RenderTerminal />} />
            <Route path="*" element={<h1>Not Found</h1>} />
          </Routes>
    </Router>
  );
}

export default App;