const nextButton = document.querySelector(".button-next");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const resultContainer = document.getElementById("result-container");
const resultText = document.getElementById("result-text");
const resultImage = document.getElementById("result-image");
const shareButton = document.getElementById("share-btn");

let shuffledQuestions,
  currentQuestionIndex,
  userAnswers,
  showingResult = false;

document.querySelector(".button-navbar")?.addEventListener("click", () => {
  // Goto link https://forms.gle/Ln9FeCKiTxQwn3Pd6
  window.location.replace("https://www.petready.app/");
});

nextButton.addEventListener("click", (event) => {
  event.preventDefault();
  if (showingResult) {
    location.reload();
  } else if (userAnswers[currentQuestionIndex] !== undefined) {
    currentQuestionIndex++;
    if (currentQuestionIndex < shuffledQuestions.length) {
      setNextQuestion();
    } else {
      showResult();
    }
  } else {
    alert("Please select an answer before proceeding.");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  shuffledQuestions = questions;
  currentQuestionIndex = 0;
  userAnswers = [];
  setNextQuestion();
});

function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.classList.add("btn");
    button.innerText = answer.text;
    button.addEventListener("click", (event) => {
      event.preventDefault();
      selectAnswer(answer.text, button);
    });
    answerButtonsElement.appendChild(button);
  });
  nextButton.classList.remove("hide");
}

function resetState() {
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
  nextButton.classList.add("hide");
  resultContainer.classList.add("hide");
  resultText.innerText = "";
  resultImage.src = "";
}

function selectAnswer(answer, button) {
  userAnswers[currentQuestionIndex] = answer;
  Array.from(answerButtonsElement.children).forEach((btn) => {
    btn.classList.remove("selected");
  });
  button.classList.add("selected");
  nextButton.classList.remove("hide"); // Ensure next button is visible after selection
}

function showResult() {
  resetState();
  const result = calculateResult(userAnswers);
  resultText.innerText = `You are a ${result.type}!\n${result.explanation}`;
  resultImage.src = result.image;
  resultContainer.classList.remove("hide");
  nextButton.innerText = "Restart";
  nextButton.classList.remove("hide");
  showingResult = true;
  shareButton.classList.remove("hide");
}

// Add an event listener to the share button to generate an image and share
shareButton.addEventListener("click", () => {
  // Use html2canvas to capture the result container as an image
  html2canvas(resultContainer)
    .then((canvas) => {
      canvas.toBlob((blob) => {
        if (!blob) {
          console.error("Failed to create a blob from the canvas");
          return;
        }

        // Create a new file object from the canvas blob
        const file = new File([blob], "quiz_result.png", { type: "image/png" });

        // Check if the browser can share the file
        if (navigator.canShare && navigator.canShare({ files: [file] })) {
          // Use the Web Share API to share the image file
          navigator
            .share({
              title: "PetReady Quiz Result",
              text: "Check out my quiz result!",
              files: [file],
            })
            .then(() => console.log("Sharing succeeded"))
            .catch((error) => console.error("Sharing failed", error));
        } else {
          alert("Your browser does not support sharing images");
        }
      }, "image/png");
    })
    .catch((error) => {
      console.error("Failed to generate image", error);
    });
});

function calculateResult(answers) {
  if (
    answers[0] === "Running" &&
    answers[1] === "Meat" &&
    answers[2] === "Energetic"
  ) {
    return {
      type: "Husky",
      explanation:
        "You are full of energy and love the outdoors, just like a Husky!",
      image: "assets/husky.jpg",
    };
  } else if (
    answers[0] === "Sleeping" &&
    answers[1] === "Vegetables" &&
    answers[2] === "Calm"
  ) {
    return {
      type: "Bulldog",
      explanation:
        "You are calm and enjoy a relaxed lifestyle, just like a Bulldog.",
      image: "assets/bulldog.jpg",
    };
  } else if (
    answers[0] === "Watching movies" &&
    answers[1] === "Snacks" &&
    answers[2] === "Friendly"
  ) {
    return {
      type: "Golden Retriever",
      explanation:
        "You are friendly and love spending time with others, just like a Golden Retriever.",
      image: "assets/golden_retriever.jpg",
    };
  } else if (
    answers[0] === "Reading" &&
    answers[1] === "Fruits" &&
    answers[2] === "Quiet"
  ) {
    return {
      type: "Shih Tzu",
      explanation:
        "You are gentle and enjoy a peaceful life, just like a Shih Tzu.",
      image: "assets/shih_tzu.jpg",
    };
  } else if (
    answers[0] === "Running" &&
    answers[1] === "Vegetables" &&
    answers[2] === "Energetic"
  ) {
    return {
      type: "Border Collie",
      explanation:
        "You are highly energetic and love being active, just like a Border Collie.",
      image: "assets/border_collie.jpg",
    };
  } else if (
    answers[0] === "Watching movies" &&
    answers[1] === "Meat" &&
    answers[2] === "Calm"
  ) {
    return {
      type: "Basset Hound",
      explanation:
        "You enjoy relaxing and taking it easy, just like a Basset Hound.",
      image: "assets/basset_hound.jpg",
    };
  } else if (
    answers[0] === "Sleeping" &&
    answers[1] === "Snacks" &&
    answers[2] === "Friendly"
  ) {
    return {
      type: "Cocker Spaniel",
      explanation:
        "You are friendly and affectionate, just like a Cocker Spaniel.",
      image: "assets/cocker_spaniel.jpg",
    };
  } else if (
    answers[0] === "Reading" &&
    answers[1] === "Meat" &&
    answers[2] === "Quiet"
  ) {
    return {
      type: "Chihuahua",
      explanation:
        "You are small but full of personality, just like a Chihuahua.",
      image: "assets/chihuahua.jpg",
    };
  } else {
    return {
      type: "Mixed Breed",
      explanation:
        "You have a unique combination of traits that make you special!",
      image: "assets/mixed_breed.jpg",
    };
  }
}

const questions = [
  {
    question: "What is your favorite activity?",
    answers: [
      { text: "Running" },
      { text: "Sleeping" },
      { text: "Watching movies" },
      { text: "Reading" },
    ],
  },
  {
    question: "What is your favorite food?",
    answers: [
      { text: "Meat" },
      { text: "Vegetables" },
      { text: "Snacks" },
      { text: "Fruits" },
    ],
  },
  {
    question: "What is your personality like?",
    answers: [
      { text: "Energetic" },
      { text: "Calm" },
      { text: "Friendly" },
      { text: "Quiet" },
    ],
  },
];
