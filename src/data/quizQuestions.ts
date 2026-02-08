export interface QuizQuestion {
  id: number;
  photo: string; // URL or imported image path
  question: string;
  options: string[];
  correctAnswer: number; // index of the correct option
}

// Placeholder questions — replace photos with your actual uploaded images
// and customize questions + answers for your girlfriend!
export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    photo: "/placeholder.svg",
    question: "Where was our first date? 💕",
    options: ["A cozy café", "The park", "A movie theater", "A restaurant"],
    correctAnswer: 0,
  },
  {
    id: 2,
    photo: "/placeholder.svg",
    question: "What were we doing here? 🌸",
    options: ["Having a picnic", "Walking on the beach", "Shopping together", "Cooking dinner"],
    correctAnswer: 1,
  },
  {
    id: 3,
    photo: "/placeholder.svg",
    question: "When was this photo taken? 📸",
    options: ["Spring 2024", "Summer 2024", "Fall 2024", "Winter 2024"],
    correctAnswer: 2,
  },
  {
    id: 4,
    photo: "/placeholder.svg",
    question: "What city were we in? 🏙️",
    options: ["Tokyo", "Seoul", "Bangkok", "Singapore"],
    correctAnswer: 0,
  },
  {
    id: 5,
    photo: "/placeholder.svg",
    question: "What did we eat here? 🍽️",
    options: ["Sushi", "Pizza", "Pad Thai", "Ramen"],
    correctAnswer: 3,
  },
  {
    id: 6,
    photo: "/placeholder.svg",
    question: "Who took this photo? 📷",
    options: ["You", "Me", "A stranger", "Timer/selfie"],
    correctAnswer: 2,
  },
  {
    id: 7,
    photo: "/placeholder.svg",
    question: "What were we celebrating? 🎉",
    options: ["Anniversary", "Your birthday", "My birthday", "Just because!"],
    correctAnswer: 0,
  },
  {
    id: 8,
    photo: "/placeholder.svg",
    question: "What song was playing? 🎵",
    options: ["Our song", "A random pop song", "No music", "Can't remember!"],
    correctAnswer: 0,
  },
  {
    id: 9,
    photo: "/placeholder.svg",
    question: "What did I surprise you with? 🎁",
    options: ["Flowers", "A handwritten letter", "A teddy bear", "Chocolates"],
    correctAnswer: 1,
  },
  {
    id: 10,
    photo: "/placeholder.svg",
    question: "How many times did we visit here? 🔄",
    options: ["Once", "Twice", "Three times", "Too many to count!"],
    correctAnswer: 3,
  },
  {
    id: 11,
    photo: "/placeholder.svg",
    question: "What's my favourite thing about this day? ❤️",
    options: ["The food", "The view", "Being with you", "Everything!"],
    correctAnswer: 2,
  },
  {
    id: 12,
    photo: "/placeholder.svg",
    question: "What happened right after this photo? 😄",
    options: ["We laughed so hard", "It started raining", "We got lost", "We found a cute shop"],
    correctAnswer: 0,
  },
];

export const birthdayConfig = {
  name: "My Love", // Replace with her actual name
  birthdayMessage: "Happy Birthday, my dearest! 🎂✨",
  endMessage: "Every moment with you is a gift. Here's to many more adventures together! 💕",
};
