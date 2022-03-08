import React, { useEffect, useState } from "react";
import uuid from "react-uuid";
import RoutineCard from "./RoutineCard";
import { Button, Form } from "react-bootstrap";
// import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function RoutineSelect({ regionSelected, setRegionSelected }) {
  let navigate = useNavigate();

  // let params = useParams();

  const [routines, setRoutine] = useState([]);
  const [date, setDate] = useState(new Date());
  const [postRoutine, setPostRoutine] = useState({
    routine: 1,
    date: date.toLocaleDateString(),
    muscle_group_id: 0,
    pain:0,
  });
  const holdey = localStorage.getItem("region");
  const holdey2 = localStorage.getItem("advancedBackup");
  const [holder, setHolder] = useState(holdey ? holdey : regionSelected.name);
  const [holder2, setHolder2] = useState(
    holdey2 ? holdey2 : regionSelected.advanced
  );
  const [showSubmitPain, setShowSubmitPain] = useState(false);
  const [painStatStore, setPainStatStore] = useState(0);

  // console.log(localStorage.getItem("region"))

  useEffect(
    () => {
      //   fetch(`/routines/${params.id}`)
      fetch(`/routines/`)
        .then((r) => r.json())
        .then((routines) => {
          console.log(routines);
          const filteredRoutines = routines.filter((routine) => {
            return routine.muscle_group.region === holder;
          });
          console.log({ filteredRoutines });
          setRoutine(filteredRoutines);
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
  // console.log("yo",routines[routines.length-1].routine + 1);

  function createNewRoutine() {
    // setPostRoutine({
    //   ...postRoutine,
    //   routine: routines[routines.length - 1].routine + 1,
    //   muscle_group_id: routines[0].muscle_group.id,
    // });

    //maybe do it backend with some custom function doing the addition?
    if (routines.length < 1) {
      fetch("/routines", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          date: date.toLocaleDateString(),
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
          date: date.toLocaleDateString(),
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
    return <RoutineCard key={uuid()} routine={routine} />;
  });

  return (
    <div className="App-header">
      {showSubmitPain ? (
        "Submitted ✔️"
      ) : (
        <div>
          <Form>
            <Form.Label>Pain level</Form.Label>
            <Form.Select
              DefaultValue="0"
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
          </Form>
          <Button
            variant="primary"
            onClick={(e) => {
              e.preventDefault();
              setShowSubmitPain(true);
            }}
          >
            Submit
          </Button>
        </div>
      )}

      <Button onClick={createNewRoutine} variant="success">
        Start New Exercise Session
      </Button>
      {mappedRoutines}
    </div>
  );
}

export default RoutineSelect;
