import React from "react";
import About from "./pages/About";
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import ProjectDetail from "./pages/ProjectDetail";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import ScrollRestore from "./components/ScrollRestore";

function App() {
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
