import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Index from "./components/Index/Index";
import Menu from "./components/menu/Menu";
import Header from "./components/header/Header";
import Prestamos from "./components/prestamos/Prestamos";
import ConvDeMoneda from "./components/Conv.DeMoneda/ConvDeMoneda";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Index/>} />
        <Route path="/Menu" element={<Menu/>} />
        <Route path="/Header" element={<Header/>} />
        <Route path="/prestamos" element={<Prestamos/>} />
        <Route path="/ConvertidorDeMoneda" element={<ConvDeMoneda/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
