const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");

// List of quotes
const quotes = [
  "You are my today and all of my tomorrows.",
  "Loving you is the best decision I’ve ever made.",
  "You are my sunshine on the darkest days.",
  "With you, I’ve found my forever.",
  "You are the reason I believe in love.",
  "My heart is and always will be yours.",
  "You are my favorite place to be.",
  "Every moment with you feels like a dream come true.",
  "You are my always and forever.",
  "I love you more than words could ever say."
];

// List of GIFs
const gifs = [
  "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGRpdnowemg4NWNoYzY2ZTlzc2tzNzR1NHpsbzgxcG5zY3VhMmdrbCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/jv2NrCzvwqPh6/giphy.gif",
  "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMm1xM2d5aWo4bGVsZXJkZWh2YXFpeWI1emUyZ3V6dGIyNnQzOG10eSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/NxC8VtyxqhMtpLoEEN/giphy.gif",
  "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExeXZpb2Z3eG05ejgzZnlzZWQ0YjRtazVpdnlrbnQwM2N6aWdoeTc3biZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/P3CZolxd8DeRy4g4fM/giphy.gif",
  "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExMGNob3dsdGViYzAyeWM3bTZiaXU3ejU4aWloNjM3bnEyeTQybGpkOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/PGp3hlI74uVxK/giphy.gif",
  "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExYWRucWhyZG85cnhjdzlqNjNoYm5zNnprMTA0NjJpNWx0ZDVnYXpibCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ZBKEV8xZElWpCKDTBo/giphy.gif",
  "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExdGVneDVzdHYxOXdkamZzY2QxeTk4OHh4ZHQyd3Q0d3dnaHE1M2VibiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/rkSu72ptAZseQ/giphy.gif",
  "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNnhtenFtZG5jeHNsOWIxanN1azBmOXVibXFxZXI1NHhwNWhqYWpkZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/PmQvERtQkKuDLgl12K/giphy.gif",
  "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmZjenh6OWNkdGQyYnBsdzk2MHYxaTJhNWRibjNxY2JqbTBwb2NrZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/IwGL1W9SISNLuIPJDM/giphy.gif",
  "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbnZuZjg1bWE4Ynl4cXVnODM3djA0ZmZkMTlwdmQzYzVzaDAxcmJxZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/r4UG27LD5Ee5y/giphy.gif"
];

// Safety check for empty arrays
if (quotes.length === 0 || gifs.length === 0) {
  console.error("Error: Quotes or GIFs array is empty!");
  question.textContent = "Oops! Something went wrong 😢";
}

// Yes button handler with separate random indices
yesBtn.addEventListener("click", () => {
  const quoteIndex = Math.floor(Math.random() * quotes.length);
  const gifIndex = Math.floor(Math.random() * gifs.length);
  
  question.textContent = quotes[quoteIndex];
  gif.src = gifs[gifIndex];
});

// No button hover effect with boundary checks
noBtn.addEventListener("mouseover", () => {
  const wrapper = document.querySelector(".wrapper");
  const maxX = wrapper.clientWidth - noBtn.clientWidth;
  const maxY = wrapper.clientHeight - noBtn.clientHeight;
  
  noBtn.style.position = "absolute";
  noBtn.style.left = Math.random() * maxX + "px";
  noBtn.style.top = Math.random() * maxY + "px";
});