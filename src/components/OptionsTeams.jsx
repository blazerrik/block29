import AllPlayers from "./AllPlayers";
import SinglePlayer from "./SinglePlayer";
import { useState ,useEffect } from "react";

export default function OptionsTeams({arrayTeams}){

    const [team, SetTeam] = useState();

    useEffect(() => {
        SetTeam(arrayTeams);
        console.log(team);
  
      }, []);


return(
    <>
      {
        <option value={team.teamId}>{team.name}</option>
      }
    </>

    
);

}