import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Movies from "./components/Movies";
import Matrix from "./components/Matrix";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-open">
      <Header />
      <Hero />
      <Movies />
      <Matrix />
      <Footer />
    </div>
  );
}

export default App;
