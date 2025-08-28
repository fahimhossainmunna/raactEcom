import { Route, Routes } from "react-router-dom";
import "./App.css";
import Rootlayout from "./components/layout/Rootlayout";
import Home from "./components/page/Home";
import About from "./components/page/About";
import Contact from "./components/page/Contact";
import SignUp from "./components/page/SignUp";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Rootlayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact/>} />
          <Route path="signUp" element={<SignUp/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
