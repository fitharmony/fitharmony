import React, { useEffect } from "react";
import { useState } from "react";
import data from "../../public/wed.json";
import styles from "./HomeExerciseList.module.scss";
import Dropdown from "../Dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { bodyPartColors } from "../../helpers";
import Link from "next/link";

const HomeExerciseList = () => {
  const itemsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState(""); // State variable for the search term

  // Filter the exercises based on the search term
  const filteredExercises = data.exercises.filter((exercise) =>
    exercise.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const maxPage = Math.ceil(filteredExercises.length / itemsPerPage);

  const paginatedData = filteredExercises.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  useEffect(() => {
    setCurrentPage(1); // Reset page to 1 when search term changes
  }, [searchTerm]);

  return (
    <div>
      {/* <SectionSeparator title="Exercises" /> */}
      <div className={styles.homeExerciseList}>
        <div className={styles.options}>
          <div>
            <label className="dropdownLabel" htmlFor="search-list">
              Search By Name
            </label>
            <input
              id="search-list"
              type="text"
              placeholder="Search by exercise name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
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
            {paginatedData.length > 0 ? (
              paginatedData.map((exercise) => (
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
                      {/* <FontAwesomeIcon
                      icon={faMagnifyingGlass}
                      className={styles.svg}
                    /> */}
                      DETAILS
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className={styles.noData}>
                  No exercises with this name found
                </td>
              </tr>
            )}
          </tbody>
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
