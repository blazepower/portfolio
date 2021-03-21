import React from "react";
import About from "./pages/About";
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import ProjectDetail from "./pages/ProjectDetail";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className={"App"}>
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route path={"/"} exact>
          <About />
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
    </div>
  );
}

export default App;
