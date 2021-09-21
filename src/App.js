import React from "react";
import About from "./pages/About";
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/nav/Nav";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import ProjectDetail from "./pages/ProjectDetail";
import { Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import ScrollRestore from "./components/ScrollRestore";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faAndroid,
  faAngular,
  faDocker,
  faJava,
  faPython,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { faCloud, faTerminal } from "@fortawesome/free-solid-svg-icons";

function App() {
  library.add(
    faAndroid,
    faAngular,
    faDocker,
    faJava,
    faPython,
    faReact,
    faCloud,
    faTerminal
  );
  const loc = useLocation();
  return (
    <div className={"App"}>
      <GlobalStyle />
      <Nav />
      <ScrollRestore />
      <AnimatePresence exitBeforeEnter>
        <Switch location={loc} key={loc.pathname}>
          <Route path={"/"} exact>
            <About />
          </Route>
          <Route path={"/resume"}>
            {() =>
              window.location.replace(
                "https://1drv.ms/b/s!ArFFHwbpf6JdpANEfNip_i19qYHH?e=ALHQqE"
              )
            }
          </Route>
          <Route path={"/projects"}>
            <Projects />
          </Route>
          <Route path={"/contact"}>
            <Contact />
          </Route>
          <Route path={"/project/:id"}>
            <ProjectDetail />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
