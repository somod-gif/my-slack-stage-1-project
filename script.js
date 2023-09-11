const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const currentDay = new Date().getDay();
const currentUTC = new Date().toUTCString();

document.querySelector(
  '[data-testid="currentDayOfTheWeek"]'
).textContent = `Current Day of the Week: ${daysOfWeek[currentDay]}`;
document.querySelector(
  '[data-testid="currentUTCTime"]'
).textContent = `Current UTC Time: ${currentUTC}`;
