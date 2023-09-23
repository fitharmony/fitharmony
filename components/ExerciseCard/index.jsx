import React from "react";
import styles from "./ExerciseCard.module.scss";

const ExerciseCard = ({ selectedExercise }) => {
  console.log(selectedExercise);
  return (
    <div className={styles.exerciseCard}>
      {" "}
      <h1>Exercise Details for {selectedExercise.name}</h1>
      {/* Here, you'd display the details and description of the exercise. */}
      <p>{selectedExercise?.description}</p>
    </div>
  );
};

export default ExerciseCard;
