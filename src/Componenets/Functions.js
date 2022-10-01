export const checkDigits = (time) => {
  if (time > 10) {
    return time;
  } else {
    return "0" + time;
  }
};

export const dateGenerator = () => {
  let now = new Date();
  return (
    now.getFullYear() +
    "/" +
    checkDigits(now.getMonth() + 1) +
    "/" +
    checkDigits(now.getDate()) +
    " " +
    checkDigits(now.getHours()) +
    ":" +
    checkDigits(now.getMinutes())
  );
};

export const colorGenerator = () => {
  const color = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
  if (color == "#ffffff") {
    colorGenerator();
  } else {
    return color;
  }
};

export const plusIndex = (index) => {
  return index + 1;
};
