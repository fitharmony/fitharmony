import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import Head from "next/head";
import data from "../../public/wed.json";
import ExerciseCard from "../../components/ExerciseCard";
import TextChip from "../../components/TextChip";
import Link from "next/link";
import Footer from "../../components/Footer";

function ExercisePage() {
  const router = useRouter();
  const { id } = router.query;
  console.log(router.query);

  // Fetch the specific exercise data using the exerciseName, or display it as needed.
  const selectedExercise =
    data.exercises.find((exercise) => exercise.id === id) || data.exercises[0];

  const exercisesWithThisBodypart = data.exercises.filter(
    (exercise) => exercise.bodyPart === selectedExercise.bodyPart
  );

  return (
    <main>
      <Head>
        <title>{selectedExercise.name || "BodyBits | Exercise Database"}</title>
        <link rel="icon" href="/logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800&family=Rubik:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Layout>
        <ExerciseCard selectedExercise={selectedExercise} />
        {exercisesWithThisBodypart.length > 1 && (
          <div className="container">
            <h2>Other exercises targetting {selectedExercise.bodyPart}</h2>
            <div className="exercise-list">
              {exercisesWithThisBodypart.map((exercise) => (
                <div className="exercise-liketype" key={exercise.id}>
                  <Link href={`/exercises/${exercise.id}/`}>
                    {exercise.name}
                  </Link>
                  <TextChip title={exercise.target || "Target"} />
                </div>
              ))}
            </div>
          </div>
        )}
      </Layout>
      <Footer />
    </main>
  );
}

export default ExercisePage;
