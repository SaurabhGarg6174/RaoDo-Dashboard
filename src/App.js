import "./App.css";
import Dashboard from "./Components/Dashboard";
import Highlights from "./Components/Highlights";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="frame">
      <Navbar />
      <Dashboard />
      <Highlights />
    </div>
  );
}

export default App;
