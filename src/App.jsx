import { Route,Routes } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Body from "./components/Body";
import NavbarPlayers from "./components/NavbarPlayers";
import DetailsPlayer from "./components/DetailsPlayer";
import NewPlayer from "./components/NewPlayer";
import AllPlayers from "./components/AllPlayers";


function App() {
  const [search, setSearch] = useState("");

  return (
    <>
      <Routes>
        <Route path="/" element={<AllPlayers search={search} setSearch={setSearch}/>}/>
        <Route path="/Player/:id" element={<DetailsPlayer/>} />
        <Route path="/NewPlayer/" element={<NewPlayer/>} />

      </Routes>
      <NavbarPlayers  search={search} setSearch={setSearch} />
      
    </>
  );
}

export default App;
