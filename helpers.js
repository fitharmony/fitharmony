export const bodyPartColors = {
  back: "#FF5733", // Vibrant Orange
  cardio: "#33FF57", // Vibrant Green
  chest: "#5733FF", // Vibrant Blue
  "lower arms": "#FF33A1", // Vibrant Pink
  "lower legs": "#A133FF", // Vibrant Purple
  neck: "#33FFF9", // Vibrant Cyan
  shoulders: "#FFC133", // Vibrant Yellow
  "upper arms": "#FF3357", // Vibrant Red
  "upper legs": "#33FFA1", // Vibrant Teal
  waist: "#FFA133", // Vibrant Orange-Yellow
};

// Function to convert hex color to RGBA
export const hexToRGBA = (hex, opacity) => {
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  let shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b);

  let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (result) {
    return `rgba(${parseInt(result[1], 16)}, ${parseInt(
      result[2],
      16
    )}, ${parseInt(result[3], 16)}, ${opacity})`;
  }
  return null;
};
