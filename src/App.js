import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import Skills from "./Components/Skills";
import SocialLinks from "./Components/SocialLinks";

function App() {
  return (
    <div>
      <NavBar/>
      <Home/>
      <About/>
      <Skills/>
      <Contact/>
      <SocialLinks/>
    </div>
  );
}

export default App;
