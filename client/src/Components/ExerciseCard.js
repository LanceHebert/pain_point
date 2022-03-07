import { useState } from "react";
import { Row, Col, Button, Form } from "react-bootstrap";
import YoutubeEmbed from "./YoutubeEmbed";
import { useNavigate } from "react-router-dom";

function ExerciseCard({
  exercise,
  // regionSelected,
  // handleSubmitExercise,
  // exerciseStatStore,
  // setExerciseStatStore,
}) {
  let navigate = useNavigate();

  const [newExercise, setNewExercise] = useState({
    routine_id: parseInt(localStorage.getItem("routineNumber")),
    exercise_id: exercise.id,
    reps: 0,
    tband: "",
    sets: 0,
    RPE: 1,
  });
  const [showExercise, setShowExercise] = useState(false);
  const [showSubmitExercise, setShowSubmitExercise] = useState(false);

  function showExerciseForm() {
    setShowExercise(true);
    setShowSubmitExercise(false);
  }
  function handleSubmitExercise() {
    // setExerciseStatStore([...exerciseStatStore, newExercise]);

    fetch("/set_stats", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newExercise),
    })
      .then((r) => r.json())
      .then((returnPostData) => console.log(returnPostData));
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
              <Form>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridSets">
                    <Form.Label>Sets Completed</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Enter Sets"
                      onChange={(e) => {
                        e.preventDefault();
                        setNewExercise({
                          ...newExercise,
                          sets: parseInt(e.target.value),
                        });
                      }}
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridReps">
                    <Form.Label>Last Reps Completed</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Enter Reps"
                      onChange={(e) => {
                        e.preventDefault();
                        setNewExercise({
                          ...newExercise,
                          reps: parseInt(e.target.value),
                        });
                      }}
                    />
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridTband">
                    <Form.Label>TheraBand Used?</Form.Label>
                    <Form.Select
                      defaultValue="None"
                      onChange={(e) => {
                        e.preventDefault();
                        setNewExercise({
                          ...newExercise,
                          tband: e.target.value,
                        });
                      }}
                    >
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
                    <Form.Select
                      defaultValue="RPE"
                      onChange={(e) => {
                        e.preventDefault();
                        setNewExercise({
                          ...newExercise,
                          RPE: parseInt(e.target.value),
                        });
                      }}
                    >
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
                {showSubmitExercise ? (
                  "Submitted ✔️"
                ) : (
                  <Button
                    variant="primary"
                    onClick={(e) => {
                      e.preventDefault();
                      setShowSubmitExercise(true);
                      handleSubmitExercise();
                    }}
                  >
                    Submit
                  </Button>
                )}
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
