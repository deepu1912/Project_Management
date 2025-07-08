// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainBody from './Components/MainBody';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainBody />}>
          <Route
            index
            element={<div ></div>}
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
