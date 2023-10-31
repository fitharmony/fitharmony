import React from "react";
import styles from "./ExerciseCard.module.scss";
import Note from "../Note";

const ExerciseCard = ({ selectedExercise }) => {
  console.log(selectedExercise);
  return (
    <div className={styles.exerciseCard}>
      {" "}
      <h1>
        Exercise Details for{" "}
        <span className={styles.name}>"{selectedExercise.name}"</span>
      </h1>
      <p>{selectedExercise?.description}</p>
      <Note />
    </div>
  );
};

export default ExerciseCard;
