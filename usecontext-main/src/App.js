import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import Sidebar from "./components/Sidebar";
import { useState } from "react";
import { Provider, UserContext } from "./context/UserContext";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Provider>
      <div className="App">
        <Header isOpen={isOpen} setIsOpen={setIsOpen} />
        <Content isOpen={isOpen} />
        {isOpen && <Sidebar />}
      </div>
    </Provider>
  );
}

export default App;
