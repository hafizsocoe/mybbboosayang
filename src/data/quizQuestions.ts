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
    photo: "/1.jpeg",
    question: "Where was our first date? 💕",
    options: ["Curry House", "House Of Curry", "Indian Curry", "Kuncu Kari"],
    correctAnswer: 0,
  },
  {
    id: 2,
    photo: "/2.jpeg",
    question: "What were we doing here? 🌸",
    options: ["Movie Day", "Take PERTEKMA Picture", "Choosing Sayang As My Partner", "Waiting For Kuncu"],
    correctAnswer: 1,
  },
  {
    id: 3,
    photo: "/3.jpeg",
    question: "When was this photo taken? 📸",
    options: ["Yesterday", "Tomorrow", "Kecik", "Kuncu"],
    correctAnswer: 2,
  },
  {
    id: 4,
    photo: "/4.jpeg",
    question: "What is this? 🏙️",
    options: ["Kuncu", "Kuncu", "Kuncu", "Kuncu"],
    correctAnswer: 3,
  },
  {
    id: 5,
    photo: "/5.jpeg",
    question: "Where did we eat here? 🍽️",
    options: ["Sushi Mentai", "Sushi King", "Sushi Zanmai", "Sushi Kuncu"],
    correctAnswer: 2,
  },
  {
    id: 6,
    photo: "/6.jpeg",
    question: "Who took this photo? 📷",
    options: ["Abang Boy", "Me", "Razif", "Kuncu"],
    correctAnswer: 1,
  },
  {
    id: 7,
    photo: "/7.jpeg",
    question: "What were we celebrating? 🎉",
    options: ["Abah birthday", "Sayang birthday", "My birthday", "Kuncu birthday"],
    correctAnswer: 1,
  },
  {
    id: 8,
    photo: "/8.jpeg",
    question: "What song was playing? 🎵",
    options: ["UNIMAS Gemilang", "Pixelated Kisses", "Ibu Pertiwiku", "Kuncu Screaming"],
    correctAnswer: 2,
  },
  {
    id: 9,
    photo: "/9.jpeg",
    question: "What did I surprise you with? 🎁",
    options: ["Boat", "Javier", "The Whole World", "Kuncu Wet Food"],
    correctAnswer: 2,
  },
  {
    id: 10,
    photo: "/10.jpeg",
    question: "How many times did we visit here? 🔄",
    options: ["Once", "Twice", "Three times", "Even Kuncu Lost Count"],
    correctAnswer: 0,
  },
  {
    id: 11,
    photo: "/11.jpeg",
    question: "What's my favourite thing about this day? ❤️",
    options: ["The flyswatter", "The view", "Everything", "The Kuncu"],
    correctAnswer: 2,
  },
  {
    id: 12,
    photo: "/12.jpeg",
    question: "What happened right after this photo? 😄",
    options: ["Keta Masuk Longkang", "Got Cool Katseye Album", "Eat Cool Laksa", "Kuncu Appears"],
    correctAnswer: 1,
  },
];

export const birthdayConfig = {
  name: "Hello My Beautiful Sayang", // Replace with her actual name
  birthdayMessage: "Happy Birthday, my dearest! 🎂✨",
  endMessage: "Every moment with you is a gift. Here's to many more adventures together! 💕",
};
