import logo from './logo.svg';
import './App.scss';
import { Route, NavLink, HashRouter, Switch } from "react-router-dom";
import About from "./components/About";
import ScrollspyNav from "react-scrollspy-nav";
import Quote from './components/Quote';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';

function App() {
  return (
    <HashRouter>
      <div>
        <div className="nav">
          <ScrollspyNav
            scrollTargetIds={["about", "skills", "projects", "experience", "education", "quote"]}
            activeNavClass="is-active"
            scrollDuration="1000"
            router="HashRouter"
          >
            <ul>
              <li><NavLink to="#about">About</NavLink></li>
              <li><NavLink to="#skills">Skills</NavLink></li>
              <li><NavLink to="#projects">Projects</NavLink></li>
              <li><NavLink to="#experience">Experience</NavLink></li>
              <li><NavLink to="#education">Education</NavLink></li>
              <li><NavLink to="#quote">Quote</NavLink></li>
            </ul>
          </ScrollspyNav>
        </div>

        <div className="content">
          <div id="about"><About /></div>
          <div id="skills"><Skills /></div>
          <div id="projects"><Projects /></div>
          <div id="experience"><Experience /></div>
          <div id="education"><Education /></div>
          <div id="quote"><Quote /></div>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
