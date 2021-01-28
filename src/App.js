import { Router } from "@reach/router";
import "./App.scss";
import { Navbar, Error } from "./Componets/index";
import { Landing, About, Skills, Projects, Contacts } from "./Pages/index";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Landing path="/"></Landing>
        <About path="/about"></About>
        <Skills path="/skills"></Skills>
        <Projects path="/projects"></Projects>

        <Contacts path="/contacts"></Contacts>
        <Error default />
      </Router>
    </div>
  );
}

export default App;
