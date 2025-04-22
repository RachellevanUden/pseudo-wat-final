import './App.css'

import { Routes, Route } from 'react-router-dom';
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import WatIsPmp from "./pages/WatIsPmp";
import Behandelingsopties from "./pages/Behandelingsopties";
import OverMij from "./pages/OverMij";

function App() {

  return (
    <>

        <Routes>
          <Route path="/" element= {<Layout />}>
            <Route index element={<Home />} />
            <Route path="WatIsPmp" element={<WatIsPmp />} />
            <Route path="Behandelingsopties" element={<Behandelingsopties />} />
            <Route path="OverMij" element={<OverMij />} />
          </Route>
        </Routes>
    </>
  );
}

export default App
