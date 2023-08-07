import AllPlayers from "./AllPlayers";
import SinglePlayer from "./SinglePlayer";
import { useState } from "react";

export default function Body(){
    const [selectedPlayerId, setselectedPlayerId] = useState(null);
    


return(
    <>
    
      {
        <AllPlayers setselectedPlayerId={setselectedPlayerId}   />
      }
    </>

    
);

}