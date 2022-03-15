import React, { useEffect, useState } from "react";
import uuid from "react-uuid";
import RoutineCard from "./RoutineCard";
import { Button, Form, Container, Row, Col } from "react-bootstrap";

import { useNavigate } from "react-router-dom";

function RoutineSelect({ regionSelected, setRegionSelected }) {
  let navigate = useNavigate();

  const [routines, setRoutines] = useState([]);
  const [date, setDate] = useState((new Date()).toLocaleDateString());
  // const [postRoutine, setPostRoutine] = useState({
  //   routine: 1,
  //   date: date.toLocaleDateString(),
  //   muscle_group_id: 0,
  //   pain: 0,
  // });
  const holdey = localStorage.getItem("region");
  const holdey2 = localStorage.getItem("advancedBackup");
  const [holder, setHolder] = useState(holdey ? holdey : regionSelected.name);
  const [holder2, setHolder2] = useState(
    holdey2 ? holdey2 : regionSelected.advanced
  );
  const [showSubmitPain, setShowSubmitPain] = useState(false);
  const [painStatStore, setPainStatStore] = useState(0);

  useEffect(
    () => {
      changeDate()
      fetch(`/routines/`)
        .then((r) => r.json())
        .then((routines) => {
          console.log(routines);
          const filteredRoutines = routines.filter((routine) => {
            return routine.muscle_group.region === holder;
          });
          console.log({ filteredRoutines });
          setRoutines(filteredRoutines);
        });
    },
    [holder, regionSelected.name]
    // [params.id]
  );
  useEffect(() => {
    localStorage.setItem("region", holdey ? holdey : regionSelected.name);
    localStorage.setItem(
      "advancedBackup",
      holdey2 ? holdey2 : regionSelected.advanced
    );
    setRegionSelected({
      ...regionSelected,
      regionBackup: holder,
      advancedBackup: holder2,
    });
  }, [holder]);

function changeDate(){  
  const splitDate = date.split("/")
  const fixedDate = splitDate[2]+ "-" + splitDate[0] + "-" + splitDate[1];
  return fixedDate
}




  function createNewRoutine() {
    if (routines.length < 1) {
      fetch("/routines", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          date: changeDate(),
          routine: 1,
          muscle_group_id: localStorage.getItem("muscle_group_id"),
          pain: painStatStore,
        }),
      })
        .then((r) => r.json())
        .then((postReturnData) => {
          console.log({ postReturnData });
          localStorage.setItem("routineNumber", postReturnData.id);
        });
    } else {
      fetch("/routines", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          date: changeDate(),
          routine: routines.length + 1,
          muscle_group_id: routines[0].muscle_group.id,
          pain: painStatStore,
        }),
      })
        .then((r) => r.json())
        .then((postReturnData) => {
          console.log({ postReturnData });
          localStorage.setItem("routineNumber", postReturnData.id);
          localStorage.setItem("muscle_group_id", routines[0].muscle_group.id);
        });
    }
    navigate("/exercises");
  }

  const mappedRoutines = routines.map((routine) => {
    return (
      <Col lg={6} className="pb-3 routineCard">
        <RoutineCard
          key={uuid()}
          routine={routine}
          routines={routines}
          setRoutines={setRoutines}
        />
      </Col>
    );
  });

  return (
    <div className="App-header">
      <Container className="pt-5">
        <Row>
          <Col>
            {showSubmitPain ? (
              "Submitted ✔️"
            ) : (
              <>
                <Form className="routineForm">
                  <Form.Label className="formLabelPain">
                    Select Current Pain level
                  </Form.Label>
                  <Form.Select
                    DefaultValue="1"
                    placeholder="Enter Pain level"
                    onChange={(e) => {
                      e.preventDefault();
                      setPainStatStore(parseInt(e.target.value));
                    }}
                  >
                    <option>0</option>
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
                  <Button
                    className="routineButtonHidden"
                    variant="primary"
                    onClick={(e) => {
                      e.preventDefault();
                      setShowSubmitPain(true);
                    }}
                  >
                    Submit
                  </Button>
                </Form>
              </>
            )}
            <div>
              <Col lg={12} className="pt-5">
                <Button
                  className="routineButton"
                  onClick={createNewRoutine}
                  variant="success"
                >
                  Start New Exercise Session
                </Button>
              </Col>
            </div>
            <Col className="pt-5">
              <Button
                className="routineButton1"
                onClick={() => navigate("/results")}
                variant="warning"
              >
                Go to Results Page
              </Button>
            </Col>
          </Col>

          <Col className="pt-1 ">
            <Row>{mappedRoutines}</Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default RoutineSelect;
