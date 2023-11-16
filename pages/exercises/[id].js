import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import Head from "next/head";
import data from "../../public/wed.json";
import ExerciseCard from "../../components/ExerciseCard";
import TextChip from "../../components/TextChip";
import Link from "next/link";
import Footer from "../../components/Footer";
import PageIntro from "../../components/BlogIntro";
import { bodyPartColors } from "../../helpers";

function ExercisePage() {
  const router = useRouter();
  const { id } = router.query;

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
      <Layout navTheme="white" showGradient={false}>
        <PageIntro
          title={selectedExercise.name.toLocaleUpperCase()}
          category="Exercise Details"
          description={
            <div style={{ display: "flex" }}>
              <TextChip
                title={selectedExercise.bodyPart || "Body Part"}
                color={bodyPartColors[selectedExercise.bodyPart]}
                style={{ marginLeft: "0" }}
              />
              <TextChip title={selectedExercise.equipment || "Body Part"} />
            </div>
          }
          imageUrl="https://images.pexels.com/photos/4162451/pexels-photo-4162451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          variant="exercise"
        />
        {/* <ExerciseCards selectedExercise={selectedExercise} /> */}
        {exercisesWithThisBodypart.length > 1 && (
          <div className="container">
            <h3>OTHER EXERCISES TARGETTING {selectedExercise.target}</h3>
            <div className="exercise-list">
              {exercisesWithThisBodypart.map((exercise) => (
                <div className="exercise-liketype" key={exercise.id}>
                  <Link href={`/exercises/${exercise.id}/`}>
                    {exercise.name}
                  </Link>
                  <TextChip
                    title={exercise.bodyPart || "Target"}
                    color={bodyPartColors[exercise.bodyPart]}
                  />
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
