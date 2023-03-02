import About from "./components/About";
// import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import TopDeals from "./components/TopDeals";

function App() {
  return (
    <div >
      <Navbar />
      <Home />
   <TopDeals />
   <About />
   {/* <Footer /> */}
    </div>
  );
}

export default App;
