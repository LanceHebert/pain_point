import React from "react";
import { Row, Col, Button, Form } from "react-bootstrap";
import YoutubeEmbed from "./YoutubeEmbed";

function ExerciseCard({ exercise, regionSelected }) {
  console.log(regionSelected, exercise);

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
          <p>How did you do?</p>
          <Form>
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
              <Form.Group as={Col} controlId="formGridState">
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

              <Form.Group as={Col} controlId="formGridState">
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
