import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Country from "./pages/Country";

import "./styles/App.scss";

function App() {
  return (
    <main className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/country/:cca2" element={<Country />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
