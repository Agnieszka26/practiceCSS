import {Routes, Route} from "react-router-dom";
import Header from "./sections/Header/Header";

import styles from "./App.module.scss";
import variables from "./assets/styles/variables.module.scss";
import "@fontsource/poppins";
import {FC} from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import {RoutesPath} from "./constants";

const App: FC = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index path={RoutesPath.HOME} element={<Home />} />
        <Route path={RoutesPath.ABOUT} element={<About />} />
        <Route path={RoutesPath.BLOG} element={<Blog />} />
        <Route path={RoutesPath.CONTACT} element={<Contact />} />
        <Route path={RoutesPath.SERVICES} element={<Services />} />
      </Routes>
    </>
  );
};

export default App;
