import { useEffect } from "react";
import { useParams } from "react-router-dom";

function Exercises({regionSelected}) {
  let params = useParams();

  useEffect(
    () =>
      fetch(`/exercises`)
        .then((r) => r.json())
        .then((exercises) => console.log(exercises,regionSelected)),
    [regionSelected]
  );
  return <div>Exercises</div>;
}

export default Exercises;
