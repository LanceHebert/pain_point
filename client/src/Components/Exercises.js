import { useEffect, useState } from "react";
import ExerciseCard from "./ExerciseCard";
import uuid from "react-uuid";
import { Button,  Modal, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Exercises({ regionSelected, setRegionSelected }) {
  const [exerciseStore, setExerciseStore] = useState([]);
  const isTrueSet = localStorage.getItem("advancedBackup") === "true";

  const [modalShow, setModalShow] = useState(false);

  let navigate = useNavigate();

  useEffect(
    () =>
      fetch(`/exercises`)
        .then((r) => r.json())
        .then((exercises) => {
          console.log(exercises);
          setExerciseStore(exercises);
        }),
    []
  );

  useEffect(
    () =>
      setRegionSelected({
        ...regionSelected,
        name: localStorage.getItem("region"),
      }),
    []
  );
// Check to make sure Region exercises are equal to muscle group even on page refresh
  const filterRegionExercises = exerciseStore.filter(
    (exercise) =>
      (regionSelected.name === exercise.muscle_group.region ||
        regionSelected.regionBackup === exercise.muscle_group.region) &&
      isTrueSet === exercise.advanced
  );

  const exerciseMap = filterRegionExercises.map((exercise) => {
    return (
      <Col lg={6} className="pb-3 routineCard">
        <ExerciseCard
          key={uuid()}
          exercise={exercise}
          regionSelected={regionSelected}
        />
      </Col>
    );
  });

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <h4 style={{color: "red" }}>Error</h4>
          <p style={{color: "black" }}>
            Must fill out and submit at least one exercise for this session.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  return (
    <div className="exerciseContainer">
      <section id="features">
        <div class="row">
          <div class="col-md-4 col-12">
            <i className="fas fa-heart icon-format"></i>
            <h3 class="feature-title ">
              Rate of Perceived exertion should be kept below 8
            </h3>
            <p>
              RPE—or the Rate of Perceived Exertion—is a scale used to identify
              the intensity of your exercise based on how hard you feel (or
              perceive) your effort to be. Its subjective so don't go over what
              YOU consider an 8 while completing these exercises.
            </p>
          </div>
          <div class="col-md-4 col-12">
            <FontAwesomeIcon icon="fa-solid fa-circle-radiation" />
            <i class="fas fa-check-circle icon-format"></i>
            <h3 class="feature-title">Don't "push" through pain</h3>
            <p>Exercise should be mostly pain free and comfortable</p>
          </div>
          <div class="col-md-4 col-12">
            <i class="fas fa-bullseye icon-format"></i>
            <h3 class="feature-title">
              Stretch minimum is 30 second hold for 3 sets
            </h3>
            <p>
              Studies show that for stretching to be effective,stretch must be
              held at least 30 seconds, three times daily
            </p>
          </div>
        </div>
      </section>

      <h1 className="exerciseTitle">Routine</h1>

      <Container className="exerciseContainer">
        <Row>{exerciseMap}</Row>
      </Container>
      <Button
        className="resultsButton"
        variant="danger"
        onClick={(e) => {
          e.preventDefault();

          localStorage.getItem("exerciseEntered")
            ? navigate("/results")
            : setModalShow(true);
        }}
      >
        See Your Results
      </Button>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}

export default Exercises;
