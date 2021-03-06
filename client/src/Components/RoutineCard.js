import React from "react";
import { Button, Card } from "react-bootstrap";

function RoutineCard({ routine, setRoutines, routines }) {
  console.log({ routine });
  function handleDelete() {
    fetch(`/api/routines/${routine.id}`, {
      method: "DELETE",
    }).then(() =>
      setRoutines(routines.filter((rInstance) => rInstance.id !== routine.id))
    );
  }
// Card to be displayed for each session a user has stored
  return (
    <div className="routineBorderCard">
      <Card>
        <Card.Header className="routineCardHeader">
          Session: {routine.routine} - {routine.muscle_group.region}
        </Card.Header>
        <Card.Body>
          <Card.Title>{routine.date}</Card.Title>

          <Button
            variant="danger"
            onClick={(e) => {
              handleDelete(e);
            }}
          >
            Delete
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default RoutineCard;
