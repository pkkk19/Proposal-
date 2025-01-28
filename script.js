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
  "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGRpdnowemg4NWNoYzY2ZTlzc2tzNzR1NHpsbzgxcG5zY3VhMmdrbCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/jv2NrCzvwqPh6/giphy.gif", // Cute couple
  "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMm1xM2d5aWo4bGVsZXJkZWh2YXFpeWI1emUyZ3V6dGIyNnQzOG10eSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/NxC8VtyxqhMtpLoEEN/giphy.gif", // Blowing kisses
  "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExeXZpb2Z3eG05ejgzZnlzZWQ0YjRtazVpdnlrbnQwM2N6aWdoeTc3biZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/P3CZolxd8DeRy4g4fM/giphy.gif", // Hugging
  "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExMGNob3dsdGViYzAyeWM3bTZiaXU3ejU4aWloNjM3bnEyeTQybGpkOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/PGp3hlI74uVxK/giphy.gif", // Dancing together
  "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExYWRucWhyZG85cnhjdzlqNjNoYm5zNnprMTA0NjJpNWx0ZDVnYXpibCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ZBKEV8xZElWpCKDTBo/giphy.gif", // Heart-shaped fireworks
  "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExdGVneDVzdHYxOXdkamZzY2QxeTk4OHh4ZHQyd3Q0d3dnaHE1M2VibiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/rkSu72ptAZseQ/giphy.gif", // Romantic sunset
  "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNnhtenFtZG5jeHNsOWIxanN1azBmOXVibXFxZXI1NHhwNWhqYWpkZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/PmQvERtQkKuDLgl12K/giphy.gif", // Love explosion
  "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmZjenh6OWNkdGQyYnBsdzk2MHYxaTJhNWRibjNxY2JqbTBwb2NrZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/IwGL1W9SISNLuIPJDM/giphy.gif", // Heart eyes
  "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbnZuZjg1bWE4Ynl4cXVnODM3djA0ZmZkMTlwdmQzYzVzaDAxcmJxZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/r4UG27LD5Ee5y/giphy.gif" // Cute love
];

// Change text and gif when the Yes button is clicked
yesBtn.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  const randomGif = gifs[randomIndex]; // Use the same index for consistency

  question.innerHTML = randomQuote;
  gif.src = randomGif;
});

// Make the No button move randomly on hover
noBtn.addEventListener("mouseover", () => {
  const wrapper = document.querySelector(".wrapper");
  const wrapperRect = wrapper.getBoundingClientRect();
  const noBtnRect = noBtn.getBoundingClientRect();

  // Calculate max positions to ensure the button stays within the wrapper
  const maxX = wrapperRect.width - noBtnRect.width;
  const maxY = wrapperRect.height - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.position = "absolute";
  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});