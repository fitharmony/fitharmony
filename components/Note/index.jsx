import React from "react";
import styles from "./Note.module.scss";

const Note = ({ bodyPart = "Body Part" }) => {
  return (
    <div className={styles.note}>
      <h4>General Exercise tips for {bodyPart}</h4>
      <p>
        A 45° side bend is a dynamic oblique-strengthening exercise that focuses
        on the muscles on the side of your torso. Starting from a standing
        position with feet shoulder-width apart, hold a dumbbell in one hand and
        place the other behind your head. With your spine neutral and core
        engaged, bend laterally to the side holding the weight, reaching a 45°
        angle. It's crucial to ensure you're bending from the waist and not the
        hips. Slowly return to the upright position and repeat for the desired
        repetitions before switching sides. This exercise not only tones and
        strengthens the obliques but also promotes better lateral flexibility
        and stability.
      </p>
    </div>
  );
};

export default Note;
