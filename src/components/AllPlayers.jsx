import { useState } from "react";
import SinglePlayer from "./SinglePlayer";
import { useEffect } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function AllPlayers({ setselectedPlayerId, search, setSearch }) {
  const [players, setPlayers] = useState([]);
  const [filterPlayers, setFilterPlayers] = useState([]);

  useEffect(() => {
    async function fetchPlayers() {
      try {
        if (players) {
          const response = await fetch(
            "https://fsa-puppy-bowl.herokuapp.com/api/2302-ACC-PT-WEB-PT-C/players"
          );
          const result = await response.json();

          setPlayers(result.data.players);
        }

        if (search !== "" || search == undefined) {
          setFilterPlayers(
            players.filter((player) => player.name.includes(search))
          );
          console.log(filterPlayers);
          // setPlayers(filterPlayers);
        } else {
          setFilterPlayers(players);
        }
      } catch (error) {
        console.error(error);
      }
    }
    fetchPlayers();
  }, [search, filterPlayers]);

  return (
    <>
      <Row xs={1} md={3} className="g-3">
        {filterPlayers.map((player) => {
          return (
            <Col key={player.id}>
              {" "}
              <SinglePlayer
                key={player.id}
                player={player}
                setselectedPlayerId={setselectedPlayerId}
              />
            </Col>
          );
        })}
      </Row>
    </>
  );
}
