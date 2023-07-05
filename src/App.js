import "./App.css";
import Header from "./components/header/Header";
import Services from "./components/services/Services";
import Navigation from "./components/nav/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <Services />
    </div>
  );
}

export default App;
