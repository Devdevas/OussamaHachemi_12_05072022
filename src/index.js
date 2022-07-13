import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Profil from './pages/Profil';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DataProvider from "./utils/DataContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <DataProvider>
        <Routes>
          <Route path="/user/:id" element={<Profil />}></Route>
          <Route path="*" element={<h1>Page not found!</h1>}></Route>
        </Routes>
      </DataProvider>
    </Router>
  </React.StrictMode>
);

