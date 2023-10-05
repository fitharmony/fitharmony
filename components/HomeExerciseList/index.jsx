import React from "react";
import { useState } from "react";
import data from "../../public/wed.json";
import styles from "./HomeExerciseList.module.scss";
import Dropdown from "../Dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { bodyPartColors } from "../../helpers";
import Link from "next/link";
import SectionSeparator from "../SectionSeparator";

const HomeExerciseList = () => {
  const itemsPerPage = 12; // Set the desired number of exercises per page
  const [currentPage, setCurrentPage] = useState(1);
  const maxPage = Math.ceil(data.exercises.length / itemsPerPage);

  const paginatedData = data.exercises.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div>
      {/* <SectionSeparator title="Exercises" /> */}
      <div className={styles.homeExerciseList}>
        <div className={styles.options}>
          <Dropdown options={data.bodyParts} label="Sort By Body Part" />
          <Dropdown options={data.equipment} label="Sort By Equipment" />
        </div>
        <table className={styles.exerciseListTable}>
          <thead>
            <tr>
              <th>Exercise Name</th>
              <th>Body Part</th>
              <th>Target Muscle</th>
              <th>Equipment</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((exercise) => (
              <tr key={exercise.id}>
                <td className={styles.part}>
                  <Link href={`/exercises/${exercise.id}/`}>
                    {exercise.name}
                  </Link>
                </td>
                <td className={styles.bodyPart}>
                  <span
                    className={styles.coloredDot}
                    style={{
                      backgroundColor: bodyPartColors[exercise.bodyPart],
                    }}
                  />
                  {exercise.bodyPart}
                </td>
                <td>{exercise.target}</td>
                <td>{exercise.equipment}</td>
                <td>
                  <button className={styles.viewButton}>
                    <FontAwesomeIcon icon={faEyeSlash} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>{" "}
          <tfoot>
            <tr>
              <td colSpan="5" style={{ textAlign: "center" }}>
                <div className={styles.pagination}>
                  <button
                    className={styles.pageButton}
                    onClick={() =>
                      setCurrentPage((prev) => Math.max(prev - 1, 1))
                    }
                    disabled={currentPage === 1}
                  >
                    Prev
                  </button>
                  <span>
                    Page {currentPage} of {maxPage}
                  </span>
                  <button
                    className={styles.pageButton}
                    onClick={() =>
                      setCurrentPage((prev) => Math.min(prev + 1, maxPage))
                    }
                    disabled={currentPage === maxPage}
                  >
                    Next
                  </button>
                </div>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default HomeExerciseList;
