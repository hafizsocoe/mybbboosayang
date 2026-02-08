import { useState } from "react";
import IntroScreen from "@/components/birthday/IntroScreen";
import QuizScreen from "@/components/birthday/QuizScreen";
import FinaleScreen from "@/components/birthday/FinaleScreen";

type Screen = "intro" | "quiz" | "finale";

const Index = () => {
  const [screen, setScreen] = useState<Screen>("intro");
  const [finalScore, setFinalScore] = useState(0);

  const handleStartQuiz = () => setScreen("quiz");

  const handleQuizComplete = (score: number) => {
    setFinalScore(score);
    setScreen("finale");
  };

  return (
    <div className="min-h-screen bg-background">
      {screen === "intro" && <IntroScreen onStart={handleStartQuiz} />}
      {screen === "quiz" && <QuizScreen onComplete={handleQuizComplete} />}
      {screen === "finale" && <FinaleScreen score={finalScore} />}
    </div>
  );
};

export default Index;
