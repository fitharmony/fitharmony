import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import Head from "next/head";
import data from "../../public/wed.json";
import TextChip from "../../components/TextChip";
import Link from "next/link";
import Footer from "../../components/Footer";
import PageIntro from "../../components/BlogIntro";
import { bodyPartColors } from "../../helpers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";

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
              <TextChip
                title={selectedExercise.equipment || "Body Part"}
                style={{ marginLeft: "0" }}
              />
            </div>
          }
          imageUrl="https://images.pexels.com/photos/4162451/pexels-photo-4162451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          variant="exercise"
        />
        <div className="blog-content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            porttitor fermentum nisl eget semper. Sed leo sem, tincidunt eu
            dolor vitae, porta eleifend diam. Fusce scelerisque scelerisque
            ligula, non placerat nulla tincidunt nec. Mauris erat risus,
            condimentum id diam sit amet, vulputate bibendum velit. Donec
            molestie suscipit faucibus. Curabitur sed posuere ante. Nulla
            ultrices cursus eleifend. In sodales varius ipsum, sit amet ultrices
            felis laoreet varius. Nulla in blandit lectus. Aenean accumsan orci
            ligula, non convallis lacus cursus at. Nunc ipsum quam, ultricies
            scelerisque leo nec, sodales convallis ipsum. Sed id congue nibh, at
            mattis sapien.
          </p>
          <br></br>
          <p>
            Aliquam et quam convallis, commodo nibh eu, laoreet dui. Sed ac leo
            nec nisl tristique viverra. Maecenas sit amet ullamcorper diam, at
            aliquet ligula. Quisque eget augue ut turpis maximus vestibulum non
            et sapien. Sed dignissim sollicitudin mauris, a condimentum nisi
            suscipit eget. Pellentesque tellus libero, bibendum in pharetra
            vitae, congue quis ipsum. Aenean luctus turpis eu sapien iaculis,
            vel commodo sem sollicitudin. Sed eu rhoncus ex, in dapibus lectus.
          </p>
          <br></br>
          <p>
            In commodo lectus molestie massa aliquam vulputate. Pellentesque nec
            cursus ipsum, at malesuada enim. Nam hendrerit convallis nunc. Fusce
            sollicitudin ipsum sem, et dignissim tortor euismod id. In hac
            habitasse platea dictumst. Quisque ornare mi a justo pretium, in
            pretium metus cursus. Curabitur rutrum enim sit amet mi egestas, id
            efficitur ante cursus. Ut dignissim maximus tortor, in elementum
            lacus condimentum id. Integer vestibulum ornare massa, at venenatis
            ligula fermentum id. Integer a luctus enim.
          </p>
          <br></br>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            porttitor fermentum nisl eget semper. Sed leo sem, tincidunt eu
            dolor vitae, porta eleifend diam. Fusce scelerisque scelerisque
            ligula, non placerat nulla tincidunt nec. Mauris erat risus,
            condimentum id diam sit amet, vulputate bibendum velit. Donec
            molestie suscipit faucibus. Curabitur sed posuere ante. Nulla
            ultrices cursus eleifend. In sodales varius ipsum, sit amet ultrices
            felis laoreet varius. Nulla in blandit lectus. Aenean accumsan orci
            ligula, non convallis lacus cursus at. Nunc ipsum quam, ultricies
            scelerisque leo nec, sodales convallis ipsum. Sed id congue nibh, at
            mattis sapien.
          </p>
        </div>
        {/* <ExerciseCards selectedExercise={selectedExercise} /> */}
        {exercisesWithThisBodypart.length > 1 && (
          <div className="container">
            <h3 style={{ marginBottom: "1em" }}>
              [OTHER EXERCISES TARGETTING {selectedExercise.target}]
            </h3>
            <div
              className="exercise-card-container"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div className="exercise-list" style={{ width: "100%" }}>
                {exercisesWithThisBodypart.map((exercise) => (
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
                      <Link href={`/exercises/${exercise.id}/`}>
                        {exercise.name}
                      </Link>
                      <TextChip
                        title={exercise.bodyPart || "Target"}
                        color={bodyPartColors[exercise.bodyPart]}
                      />
                      <TextChip
                        title={exercise.equipment || "Target"}
                        style={{ marginLeft: "0" }}
                      />
                    </div>
                    <FontAwesomeIcon
                      icon={faExternalLink}
                      className="fa-icon"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </Layout>
      <Footer />
    </main>
  );
}

export default ExercisePage;
