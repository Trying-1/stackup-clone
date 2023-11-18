import Main from "./Main";
import About from "./components/About";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./styles/style.css"
function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <About/>
      <Footer/>
    </div>
  );
}

export default App;
