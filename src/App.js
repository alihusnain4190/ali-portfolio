import { Router } from "@reach/router";
import "./App.scss";
import { Navbar } from "./Componets/index";
import { Landing, About } from "./Pages/index";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Landing path="/"></Landing>
        <About path="/about"></About>
      </Router>
    </div>
  );
}

export default App;
