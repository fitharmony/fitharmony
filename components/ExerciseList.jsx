import React, { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";
import TextChip from "./TextChip";
import { bodyPartColors } from "../helpers";

function ExerciseList({ data, selectedExercise }) {
  const [displayCount, setDisplayCount] = useState(10); // Initial count to display

  const exercisesWithThisBodypart = data.exercises.filter(
    (exercise) => exercise.bodyPart === selectedExercise.bodyPart
  );

  const loadMore = () => {
    // Increase the display count by 10 when "See More" is clicked
    setDisplayCount(displayCount + 10);
  };

  return (
    <div style={{ width: "100%" }}>
      <div className="exercise-list">
        {exercisesWithThisBodypart.slice(0, displayCount).map((exercise) => (
          // Render the exercises based on the current display count
          // Your exercise rendering code here
          <div
            className="exercise-liketype-ctr"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <div className="exercise-liketype" key={exercise.id}>
              <Link href={`/exercises/${exercise.id}/`}>{exercise.name}</Link>
              <TextChip
                title={exercise.bodyPart || "Target"}
                color={bodyPartColors[exercise.bodyPart]}
              />
              <TextChip
                title={exercise.equipment || "Target"}
                style={{ marginLeft: "0" }}
              />
            </div>
            <FontAwesomeIcon icon={faExternalLink} className="fa-icon" />
          </div>
        ))}
      </div>
      {displayCount < exercisesWithThisBodypart.length && (
        <button onClick={loadMore}>See More</button>
      )}
    </div>
  );
}

export default ExerciseList;
