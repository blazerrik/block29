import { useState } from 'react'
import SinglePlayer from './SinglePlayer';
import {useEffect} from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useParams } from "react-router-dom";



export default function SearchPlayers(){

    const [players, setPlayers] = useState([]);
    const { str } = useParams();
    const [filterPlayers , setFilterPlayers] = useState([]);

    const filterPosts = (posts, query) => {
      
      if (!query) {
          return posts;
      }
      return posts.filter((post) => {
          const postName = post.name.toLowerCase();
          return postName.includes(query);
      });
  };



    useEffect(() => {
        async function fetchPlayers() {
          try {
            const response = await fetch(
              "https://fsa-puppy-bowl.herokuapp.com/api/2302-ACC-PT-WEB-PT-C/players"
            );
            const result = await response.json();
            
           
            setPlayers(result.data.players)

            //setFilterPlayers(filterPosts(players,str));


            console.log(filterPosts(players,str))

           
          } catch (error) {

            console.error(error);
          }
    
        }
        fetchPlayers();
      }, []);

      return(
        <>
        <Row xs={1} md={3} className="g-3" >
          
        {players.map((player) =>{
          return<Col key={player.id}> <SinglePlayer  key={player.id} player={player}  /></Col>;
        })}
        </Row>
        </>
      );



    
}