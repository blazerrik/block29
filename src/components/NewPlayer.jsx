import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";

import InputGroup from "react-bootstrap/InputGroup";

import { useNavigate } from "react-router-dom";

export default function NewPlayer() {
  const [error, setError] = useState(null);
  const [name, setName] = useState("");
  const [breed, SetBreed] = useState("");
  const [imageUrl, SetImageUrl] = useState("");
  const [status, SetStatus] = useState("field");
  const [team, SetTeam] = useState("Ruff");
  const [teamId, SetTeamId] = useState(680);
  const newPlayer = { name, breed, imageUrl, status, teamId, team };
  const [teams, setTeams] = useState([]);
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      //console.log(newPlayer);
      const response = await fetch(
        "https://fsa-puppy-bowl.herokuapp.com/api/2302-ACC-PT-WEB-PT-C/players",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newPlayer),
        }
      );
      const result = await response.json();
      console.log(result);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  }

  useEffect(() => {
    async function fetchTeams() {
      try {
        const response = await fetch(
          "https://fsa-puppy-bowl.herokuapp.com/api/2302-ACC-PT-WEB-PT-C/teams"
        );
        const result = await response.json();

        setTeams(result.data.teams);
        //console.log(result.data.teams);
      } catch (error) {
        console.error(error);
      }
    }
    fetchTeams();
  }, []);

  return (
    <Form onSubmit={handleSubmit}>
      <h2>Create New Player</h2>
      {error && <p>{error}</p>}
      <Form.Group className="mb-3">
        <Form.Label>Username</Form.Label>
        <InputGroup hasValidation>
          <Form.Control
            type="text"
            value={newPlayer.name}
            aria-describedby="inputGroupPrepend"
            onChange={(e) => setName(e.target.value)}
          />
        </InputGroup>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Breed</Form.Label>
        <Form.Control
          type="text"
          label="breed"
          onChange={(e) => SetBreed(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Imagen</Form.Label>
        <Form.Control
          type="text"
          label="image"
          onChange={(e) => SetImageUrl(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Status</Form.Label>
        <Form.Select
          aria-label="Default select example"
          onChange={(e) => SetStatus(e.target.value)}
        >
          <option key="1" value="field">
            field
          </option>
          <option key="2" value="field">
            bench
          </option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Team</Form.Label>
        <Form.Select
          aria-label="Default select example"
          onChange={(e) => {
            SetTeam(e.target.value);
            teams.map((t) => {
              if (t.name === team) {
                SetTeamId(t.id);
              }
            });
          }}
        >
          {teams.map((t) => {
            return (
              <option key={t.teamId} value={t.teamId}>
                {t.name}
              </option>
            );
          })}
        </Form.Select>
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
