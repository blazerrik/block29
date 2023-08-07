import { useState } from 'react'

import {useEffect} from 'react'



export default function FetchTeams(){

    const [teams, setTeams] = useState(["",""]);

    useEffect(() => {
        async function fetchPlayers() {
          try {
            const response = await fetch(
              "https://fsa-puppy-bowl.herokuapp.com/api/2302-ACC-PT-WEB-PT-C/teams"
            );
            const result = await response.json();
            
            setTeams(result.data.teams);
            console.log(teams);
          } catch (error) {

            console.error(error);
          }
    
        }
        fetchPlayers();
      }, []);


      return(teams);



    
}