import { useState } from "react";
import "./App.css";
import { MainNavbar, Search } from "./components/index";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const handleModeChange = () => {
    setDarkMode((prevValue) => !prevValue);
   
  };
  return (
    <div className="App">
      <MainNavbar darkMode={darkMode} handleModeChange={handleModeChange} />
      <Search darkMode={darkMode} />
    </div>
  );
}

export default App;
