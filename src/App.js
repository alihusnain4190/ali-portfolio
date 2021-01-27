import { Router } from "@reach/router";
import "./App.scss";
import { Navbar } from "./Componets/index";
import { Landing, About, Skills, Projects } from "./Pages/index";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Landing path="/"></Landing>
        <About path="/about"></About>
        <Skills path="/skills"></Skills>
        <Projects path="/projects"></Projects>
      </Router>
    </div>
  );
}

export default App;
