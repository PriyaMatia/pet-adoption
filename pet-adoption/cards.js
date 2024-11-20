const advantages = [
  {
    heading: "Unconditional Love",
    description:
      "Pets provide constant companionship and love, making you feel less lonely.",
    bgColor: "#ff9e80",
  },
  {
    heading: "Stress Relief",
    description: "Spending time with pets reduces stress and anxiety.",
    bgColor: "#ffcc80",
  },
  {
    heading: "Improved Physical Health",
    description:
      "Taking care of pets keeps you active and improves your physical well-being.",
    bgColor: "#80cbc4",
  },
  {
    heading: "Emotional Support",
    description: "Pets help boost your mood and provide emotional stability.",
    bgColor: "#a5d6a7",
  },
  {
    heading: "Sense of Responsibility",
    description: "Caring for a pet teaches responsibility and empathy.",
    bgColor: "#ce93d8",
  },
];

// Function to render the cards dynamically
function renderCards() {
  const container = document.getElementById("cards-container");
  advantages.forEach((advantage) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.style.backgroundColor = advantage.bgColor;

    const cardHeading = document.createElement("h3");
    cardHeading.innerText = advantage.heading;
    card.appendChild(cardHeading);

    const cardDescription = document.createElement("p");
    cardDescription.innerText = advantage.description;
    card.appendChild(cardDescription);

    container.appendChild(card);
  });
}

// Call the function to render cards on page load
document.addEventListener("DOMContentLoaded", renderCards);
