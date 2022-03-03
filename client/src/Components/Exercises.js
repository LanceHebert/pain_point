import { useEffect, useState } from "react";
import YoutubeEmbed from "./YoutubeEmbed";
import ExerciseCard from "./ExerciseCard";
import uuid from "react-uuid";

function Exercises({ regionSelected }) {
  const [exerciseStore, setExerciseStore] = useState([]);

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

  const filterRegionExercises = exerciseStore.filter(
    (exercise) => (regionSelected.name === exercise.muscle_group.region && regionSelected.advanced === exercise.advanced)
  );

  const exerciseMap = filterRegionExercises.map((exercise) => {
    return (
      <ExerciseCard
        key={uuid()}
        exercise={exercise}
        regionSelected={regionSelected}
      />
    );
  });

  return (
    <div>
      <section id="features">
        <div class="row">
          <div class="col-md-4 col-12">
            <i class="fas fa-heart icon-format"></i>
            <h3 class="feature-title">
              Rate of Perceived exertion should be kept below 8
            </h3>
            <p>
              RPE—or the Rate of Perceived Exertion—is a scale used to identify
              the intensity of your exercise based on how hard you feel (or
              perceive) your effort to be. Its subjective so don't go over what
              YOU consider an 8.{" "}
            </p>
          </div>
          <div class="col-md-4 col-12">
            <i class="fas fa-check-circle icon-format"></i>
            <h3 class="feature-title">Don't "push" through pain</h3>
            <p>Exercise should be mostly pain free and comfortable</p>
          </div>
          <div class="col-md-4 col-12">
            <i class="fas fa-bullseye icon-format"></i>
            <h3 class="feature-title">Stretch minimum is 3 x 30 seconds</h3>
            <p>
              Studies show that for stretching to be effective,stretch must be
              held at least 30 seconds three times daily
            </p>
          </div>
        </div>
      </section>
      {/* <div className="bigBox"> */}
        <h1>Routine</h1>
        {/* <div className="tameBox">
          <YoutubeEmbed embedId="Sl19P-Xi2nY" />
        </div> */}
      {/* </div> */}
      {exerciseMap}
    </div>
  );
}

export default Exercises;
