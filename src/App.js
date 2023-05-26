

import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Analytics from "./components/Analytics";
import NewsLetter from "./components/NewsLetter";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">

      <NavBar/>
      <Hero/>
      <Analytics/>
      <NewsLetter/>
      <Cards/>
      <Footer/>
   
    </div>
  );
}

export default App;
