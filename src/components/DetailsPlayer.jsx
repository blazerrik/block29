import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";
import Modal from "react-bootstrap/Modal";
import Toast from 'react-bootstrap/Toast';

export default function DetailsPlayer() {
  const { id } = useParams();
  const [player, setPlayer] = useState(null);
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [deleteShow, setDeleteShow] = useState(false);
  const handleClose = () => setDeleteShow(false);
  const handleShow = () => setDeleteShow(true);
  const [showToast, setShowToast] = useState(false);
  const toggleShowToast = () => setShowToast(!showToast);
  

  async function handleDelete(event) {
    event.preventDefault();

    try {
      const response = await fetch(
        `https://fsa-puppy-bowl.herokuapp.com/api/2302-ACC-PT-WEB-PT-C/players/${id}`,
        {
          method: "DELETE",
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
    async function fetchPlayer() {
      try {
        //console.log(id);
        const response = await fetch(
          `https://fsa-puppy-bowl.herokuapp.com/api/2302-ACC-PT-WEB-PT-C/players/${id}`
        );
        const result = await response.json();
        setPlayer(result.data.player);
      } catch (error) {
        console.error(error);
      }
    }
    fetchPlayer();
  }, []);

  return (
    <>
      {player && (
        <Card style={{ width: "25rem" }}>
          <Card.Header>Name :{player.name}</Card.Header>
          <Card.Img variant="top" src={player.imageUrl} />
          <Card.Body>
            <Card.Text> Breed : {player.breed}</Card.Text>
            <ListGroup variant="flush">
              <ListGroup.Item>Status: {player.status}</ListGroup.Item>
              <ListGroup.Item>
                Team : {player.team ? player.team.name : "No team"}
              </ListGroup.Item>
              <ListGroup.Item>Create: {player.createdAt}</ListGroup.Item>
            </ListGroup>
            <Button
              variant="danger"
              onClick={() => {
                handleShow();
              }}
            >
              Delete
            </Button>
          </Card.Body>
          <Card.Footer>
            <Button
              variant="secondary"
              onClick={() => {
                navigate("/");
              }}
            >
              Go back
            </Button>
          </Card.Footer>
          <Modal show={deleteShow} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Confirm Delete</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Are you sure to permanently remove this item?
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleDelete}>
                Confirm
              </Button>
            </Modal.Footer>
          </Modal>
        </Card>
      )}
    </>
  );
}
