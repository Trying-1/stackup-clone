import Main from "./Main";
import About from "./components/About";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Popup from "./components/Popup";
import "./styles/style.css"
function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <About/>
      <Popup/>
      <Footer/>
    </div>
  );
}

export default App;
