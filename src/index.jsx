import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./Inicio";
import Vitrine from "./Vitrine";
import Sobre from "./Sobre";
import Detalhes from "./Detalhes";
import Header from "./Header";
import Novidades from "./Novidades";
import Erro from './Erro';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Header></Header>
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/vitrine" element={<Vitrine />} />
      <Route path="detalhes" element={<Detalhes />} >
        <Route path=":detalhes" element={<Detalhes />} />
      </Route>
      <Route path="sobre" element={<Sobre />} />
      <Route path="novidades" element={<Novidades />} />

      <Route path="*" element={<Erro />} />
    </Routes>

    <footer style={{ color: "white" }}>©2022 Rayssa S. - Tech4me</footer>
  </BrowserRouter>
);


reportWebVitals();
