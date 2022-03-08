import React from "react";
import { Button, Card } from "react-bootstrap";

function RoutineCard({ routine }) {
  console.log(routine);
  return (
      <>
   

      <Card>
        <Card.Header>
          Session: {routine.routine} - {routine.muscle_group.region}
        </Card.Header>
        <Card.Body>
          <Card.Title>{routine.date}</Card.Title>
       
        <Button variant="danger">Delete</Button>
        </Card.Body>
      </Card>
      </>
  );
}

export default RoutineCard;
