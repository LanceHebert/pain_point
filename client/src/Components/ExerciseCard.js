import { useState } from "react";
import { Row, Col, Button, Form } from "react-bootstrap";
import YoutubeEmbed from "./YoutubeEmbed";
import { useNavigate } from "react-router-dom";

function ExerciseCard({ exercise }) {
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
// When invoked opens up form to show more inputs
  function showExerciseForm() {
    setShowExercise(true);
    setShowSubmitExercise(false);
  }
  // Posting to backend the exercise stats entered
  function handleSubmitExercise() {
    fetch("/set_stats", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newExercise),
    })
      .then((r) => r.json())
      .then((returnPostData) => {
        localStorage.setItem("exerciseEntered", true);
        console.log(returnPostData);
      });
  }

  return (
    <div>
      <div className="card">
        <YoutubeEmbed embedId={exercise.videoEmbed} />
        <div id="extraControl">
        <div className="card-body">
          <h2 className="card-title">{exercise.name}</h2>
          <div id="cardSizing">
          <p className="card-text">{exercise.description}</p>
          </div>
          <p className="pSmallPrint">
            Recommended sets: <br />
            {exercise.recreps} reps for {exercise.recsets} sets
          </p>
          
          {/* Ternary to show if user decided to start exercise */}
          {showExercise ? (
            <>
              <p className="card-text">
                Based on the Recommended sets, how did you do?
              </p>
              <Form id="alternateGradient">
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridSets">
                    <Form.Label>Completed Recommended Sets </Form.Label>
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
                    <Form.Label># of reps of incomplete set</Form.Label>
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
    </div>
  );
}

export default ExerciseCard;
