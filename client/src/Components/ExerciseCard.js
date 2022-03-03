import { useState } from "react";
import { Row, Col, Button, Form } from "react-bootstrap";
import YoutubeEmbed from "./YoutubeEmbed";
import { useNavigate } from "react-router-dom";

function ExerciseCard({ exercise, regionSelected }) {
  let navigate = useNavigate();

  const [newExercise, setNewExercise] = useState({
    routine_id: 0,
    exercise_id: 0,
    reps: 0,
    tband: "",
    sets: 0,
    RPE: 0,
  });
  const [showExercise, setShowExercise] = useState(false);

  function showExerciseForm() {
    fetch(`/routines`)
      .then((r) => r.json())
      .then((sessionReturn) => {
        console.log(sessionReturn);
        setNewExercise({
          ...newExercise,
          routine_id: sessionReturn[sessionReturn.length - 1].routine + 1,
          exercise_id: sessionReturn[sessionReturn.length - 1].muscle_group.id,
        });
        setShowExercise(true);
      });
  }

  function handleSubmitExercise(e) {
    e.preventDefault();
    console.log(e.target.formGridSets.value);
    setNewExercise({
      ...newExercise,
      reps: parseInt(e.target.formGridReps.value),
      tband: e.target.formGridTband.value,
      sets: parseInt(e.target.formGridSets.value),
      RPE: parseInt(e.target.formGridRPE.value),
    });

    fetch("/set_stats", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newExercise),
    })
      .then((r) => r.json())
      .then((returnPostData) => navigate("set_stats"));
  }

  return (
    <div className="App-header">
      <div className="card">
        <YoutubeEmbed embedId={exercise.videoEmbed} />

        <div className="card-body">
          <h2 className="card-title">{exercise.name}</h2>
          <p className="card-text">{exercise.description}</p>
          <p>
            Recommended sets: {exercise.recsets} x {exercise.recreps} times
          </p>
          {showExercise ? (
            <>
              <p>How did you do?</p>
              <Form onSubmit={(e) => handleSubmitExercise(e)}>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridSets">
                    <Form.Label>Sets Completed</Form.Label>
                    <Form.Control type="number" placeholder="Enter Sets" />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridReps">
                    <Form.Label>Last Reps Completed</Form.Label>
                    <Form.Control type="number" placeholder="Enter Reps" />
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridTband">
                    <Form.Label>TheraBand Used?</Form.Label>
                    <Form.Select defaultValue="None">
                      <option>None</option>
                      <option>Yellow</option>
                      <option>Red</option>
                      <option>Green</option>
                      <option>Blue</option>
                      <option>Black</option>
                      <option>Silver</option>
                      <option>Gold</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridRPE">
                    <Form.Label>Rate of Perceived Exertion</Form.Label>
                    <Form.Select defaultValue="RPE">
                      <option>Choose...</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>6</option>
                      <option>7</option>
                      <option>8</option>
                      <option>9</option>
                      <option>10</option>
                    </Form.Select>
                  </Form.Group>
                </Row>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </>
          ) : (
            <Button variant="primary" onClick={showExerciseForm}>
              Start Exercise
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ExerciseCard;

{
  /* <iframe
          title={exercise.videoEmbed}
          src={`https://www.youtube.com/embed/${exercise.videoEmbed}`}
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe> */
}
{
  /* <Card className="text-center">
        <Card.Header>Featured</Card.Header>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </Card> */
}
