import React from "react";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import { BrowserRouter, Routes,Route } from "react-router-dom";

import Cardpages from "./Pages/Cardpages";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div>
          <Header />
        </div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/movies/:id" element={<Cardpages />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
