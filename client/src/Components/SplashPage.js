import { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function SplashPage() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();

  useEffect(() => handleShow(), []);

  return (
    <div className="splash App-headerColor">
      <video autoPlay loop id="video-background" muted>
        <source src="/videos/runningVid.mp4" type="video/mp4" />
      </video>
      <div className="splashCard">
        <div className="splashCardText">
          <h1>
            Welcome
            <br />
            <br /> Pain Point is a website dedicated to solving those common
            pesky injuries before they start!
          </h1>

          <Button
            variant="outline-dark"
            size="lg"
            className="splashBTN"
            onClick={() => navigate("/bodyDiagram")}
          >
            Enter{" "}
          </Button>
        </div>
      </div>

      {/* MODAL */}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title style={{color: "red" }} >Warning!</Modal.Title>
        </Modal.Header>

        <Modal.Body style={{color: "black" }}>

          This website is meant to be educational! These exercises are meant to
          be preventative in nature only and do not serve as a prescription.
          <br />
          <br />
          Please consult with your doctor or physical therapist before
          undertaking any exercise.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Understood
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default SplashPage;
