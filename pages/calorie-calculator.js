import React, { useState } from "react";
import Layout from "../components/Layout";
import Head from "next/head";
import Footer from "../components/Footer";
import PageIntro from "../components/BlogIntro";
import Disclaimer from "../components/Disclaimer";

function CalorieCalculator() {
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("male");
  const [heightFeet, setHeightFeet] = useState("");
  const [heightInches, setHeightInches] = useState("");
  const [weight, setWeight] = useState("");
  const [goal, setGoal] = useState("maintain");
  const [activityLevel, setActivityLevel] = useState("sedentary");
  const [calories, setCalories] = useState(null);
  const [errors, setErrors] = useState({});

  // Function to validate form fields
  const validateForm = () => {
    let formIsValid = true;
    let newErrors = {};

    // Validate age
    if (!age || isNaN(age) || age < 18 || age > 99) {
      formIsValid = false;
      newErrors["age"] = "Please enter a valid age between 18 and 99.";
    }

    // Validate height in feet
    if (!heightFeet || isNaN(heightFeet) || heightFeet <= 0 || heightFeet > 8) {
      formIsValid = false;
      newErrors["heightFeet"] = "Please enter a valid height in feet.";
    }

    // Validate height in inches
    if (isNaN(heightInches) || heightInches < 0 || heightInches >= 12) {
      formIsValid = false;
      newErrors["heightInches"] =
        "Please enter a valid number of inches (0-11).";
    }

    // Validate weight
    if (!weight || isNaN(weight) || weight <= 0 || weight > 900) {
      formIsValid = false;
      newErrors["weight"] = "Please enter a valid weight in pounds.";
    }

    // Validate sex
    if (!sex) {
      formIsValid = false;
      newErrors["sex"] = "Please select your sex.";
    }

    // If using toggles for units, add validation here to ensure unit consistency or convert values

    setErrors(newErrors);
    return formIsValid;
  };

  // Calorie calculation function (simplified version)
  const calculateCalories = () => {
    if (!validateForm()) {
      return;
    }

    // Conversion factors
    const heightInCm =
      (parseInt(heightFeet) * 12 + parseInt(heightInches)) * 2.54;
    const weightInKg = parseInt(weight) / 2.20462;

    // Calculate RMR using Mifflin-St Jeor Equation
    const RMR =
      sex === "male"
        ? 10 * weightInKg + 6.25 * heightInCm - 5 * age + 5
        : 10 * weightInKg + 6.25 * heightInCm - 5 * age - 161;

    // Activity level factors
    const activityFactors = {
      sedentary: 1.2,
      lightly_active: 1.375,
      moderately_active: 1.55,
      very_active: 1.725,
      extra_active: 1.9,
    };

    // Total daily calories
    let totalCalories = RMR * activityFactors[activityLevel];

    // Adjust for goal
    if (goal === "lose") {
      totalCalories -= 500;
    } else if (goal === "gain") {
      totalCalories += 500;
    }

    setCalories(totalCalories.toFixed(0));
  };

  return (
    <main>
      <Head>
        <title>FitHarmony | Calorie Calculator</title>
        <meta
          name="description"
          content="Use our Calorie Calculator to find out your daily caloric needs for weight maintenance, loss, or gain. Tailored to your individual lifestyle, our tool is free and easy to use."
        />
        <link rel="icon" href="/logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800&family=Rubik:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <meta
          name="description"
          content="Explore our wide range of fitness and wellness blogs covering various topics to help you on your wellness journey."
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-KE9GPRXLWN"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag() {
              window.dataLayer.push(arguments);
            }
            gtag("js", new Date());
            gtag("config", "G-KE9GPRXLWN");
          `,
          }}
        />
      </Head>
      <Layout showGradient={false} navTheme="white">
        <PageIntro
          title="Calorie Calculator"
          description="Discover your specific caloric requirements with our comprehensive Calorie Calculator. Perfect for anyone embarking on a health and fitness journey, this easy-to-use tool takes into account your age, sex, weight, height, and activity level to provide an accurate estimate of the daily calories needed to achieve your weight management goals. With our Calorie Calculator, you can plan your diet with confidence, whether you aim to maintain your current weight, shed pounds, or bulk up. Get started below and make informed decisions about your nutritional needs."
          variant="calculator"
        />
        <Disclaimer
          text="This Calorie Calculator is designed for informational purposes only and is not intended as a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health providers with any questions you may have regarding a medical condition or health objectives. Do not rely solely on the information provided by our tool for making health-related decisions. If you have or suspect you have a health problem, consult your healthcare provider promptly."
          style={{ margin: "0 0 2.5em 0" }}
        />
        <section className="bordered-scn" aria-labelledby="calorie-calculator">
          <div className="input-group">
            <label>Age:</label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="Enter age"
            />
            {errors.age && (
              <div className="error" role="alert">
                {errors.age}
              </div>
            )}
          </div>

          {/* Sex radio buttons */}
          <div className="input-group radioGroup">
            <label htmlFor="sex">Sex:</label>
            <label>
              <input
                id="sex"
                type="radio"
                value="male"
                checked={sex === "male"}
                onChange={() => setSex("male")}
              />
              Male
            </label>
            <label>
              <input
                id="sex"
                type="radio"
                value="female"
                checked={sex === "female"}
                onChange={() => setSex("female")}
              />
              Female
            </label>
          </div>

          {/* Height input */}
          <div className="input-group">
            <label htmlFor="height">Height:</label>
            <input
              id="height"
              type="number"
              value={heightFeet}
              onChange={(e) => setHeightFeet(e.target.value)}
              placeholder="Feet"
            />
            {errors.heightFeet && (
              <div className="error" role="alert">
                {errors.heightFeet}
              </div>
            )}
            <input
              id="height"
              type="number"
              value={heightInches}
              onChange={(e) => setHeightInches(e.target.value)}
              placeholder="Inches"
            />
            {errors.heightInches && (
              <div className="error" role="alert">
                {errors.heightInches}
              </div>
            )}
          </div>

          {/* Weight input */}
          <div className="input-group">
            <label htmlFor="weight">Weight:</label>
            <input
              id="weight"
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="Enter weight in lbs"
            />
            {errors.weight && (
              <div className="error" role="alert">
                {errors.weight}
              </div>
            )}
          </div>

          {/* Goal selector */}
          <div className="input-group radioGroup">
            <p>Goal:</p>
            <label>
              <input
                type="radio"
                value="maintain"
                checked={goal === "maintain"}
                onChange={(e) => setGoal(e.target.value)}
              />
              Maintain Current Weight
            </label>
            <label>
              <input
                type="radio"
                value="lose"
                checked={goal === "lose"}
                onChange={(e) => setGoal(e.target.value)}
              />
              Lose Weight
            </label>
            <label>
              <input
                type="radio"
                value="gain"
                checked={goal === "gain"}
                onChange={(e) => setGoal(e.target.value)}
              />
              Gain Weight
            </label>
          </div>

          {/* Activity level selector */}
          <div className="input-group radioGroup">
            <p>Activity Level:</p>

            <label>
              <input
                type="radio"
                value="sedentary"
                checked={activityLevel === "sedentary"}
                onChange={(e) => setActivityLevel(e.target.value)}
              />
              Sedentary (little to no exercise)
            </label>

            <label>
              <input
                type="radio"
                value="lightly_active"
                checked={activityLevel === "lightly_active"}
                onChange={(e) => setActivityLevel(e.target.value)}
              />
              Lightly Active (light exercise/sports 1-3 days/week)
            </label>

            <label>
              <input
                type="radio"
                value="moderately_active"
                checked={activityLevel === "moderately_active"}
                onChange={(e) => setActivityLevel(e.target.value)}
              />
              Moderately Active (moderate exercise/sports 3-5 days/week)
            </label>

            <label>
              <input
                type="radio"
                value="very_active"
                checked={activityLevel === "very_active"}
                onChange={(e) => setActivityLevel(e.target.value)}
              />
              Very Active (hard exercise/sports 6-7 days a week)
            </label>

            <label>
              <input
                type="radio"
                value="extra_active"
                checked={activityLevel === "extra_active"}
                onChange={(e) => setActivityLevel(e.target.value)}
              />
              Extra Active (very hard exercise/sports & physical job or 2x
              training)
            </label>
          </div>

          <button onClick={calculateCalories} aria-label="Calculate calories">
            Calculate
          </button>
          {calories && (
            <div className="calorie-rsp">
              <h2>Estimated Daily Calories</h2>
              <p className="neon-text">{calories} cal.</p>
            </div>
          )}
        </section>
      </Layout>
      <Footer />
    </main>
  );
}

export default CalorieCalculator;
