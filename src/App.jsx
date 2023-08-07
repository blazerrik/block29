import { Route,Routes } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Body from "./components/Body";
import NavbarPlayers from "./components/NavbarPlayers";
import DetailsPlayer from "./components/DetailsPlayer";
import NewPlayer from "./components/NewPlayer";
import AllPlayers from "./components/AllPlayers";
import SearchPlayers from "./components/SearchPlayers";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
         <Routes>
        <Route path="/" element={<Body/>}/>
        <Route path="/Player/:id" element={<DetailsPlayer/>} />
        <Route path="/NewPlayer/" element={<NewPlayer/>} />
        <Route path="/Search/:str" element={<SearchPlayers/>} />

      </Routes>
      <NavbarPlayers />
      
    </>
  );
}

export default App;
