import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Index from "./components/Index/Index";
import Menu from "./components/menu/Menu";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index/>} />
        <Route path="/Menu" element={<Menu/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
