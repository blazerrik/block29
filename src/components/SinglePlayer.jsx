import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function SinglePlayer({ player, setselectedPlayerId }) {
  const navigate = useNavigate();
  return (
    <Card style={{ width: "18rem" }} className="h-100">
      <Card.Img variant="top" src={player.imageUrl}  />
      <Card.Body>
        <Card.Title>{player.name}</Card.Title>
        <Card.Text>{player.breed}</Card.Text>
            <Button variant="outline-info" onClick={()=>{ navigate(`/player/${player.id}`)}}>Details</Button>
      </Card.Body>
    </Card>
  );
}
