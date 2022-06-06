import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import AnimalsPage from "./components/Pages/Animals";
import FasionPage from "./components/Pages/Fasion";
import FoodPage from "./components/Pages/Food";
import NaturePage from "./components/Pages/Nature";
import PeoplePage from "./components/Pages/People";
import MainPage from "./components/Pages/Main";

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/home" element={<MainPage />} />
        <Route path="/animals" element={<AnimalsPage />} />
        <Route path="/fashion" element={<FasionPage />} />
        <Route path="/food" element={<FoodPage />} />
        <Route path="/nature" element={<NaturePage />} />
        <Route path="/people" element={<PeoplePage />} />
      </Routes>
    </div>
  );
}

export default App;
