import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { quizQuestions } from "@/data/quizQuestions";
import ScoreTracker from "./ScoreTracker";

interface QuizScreenProps {
  onComplete: (score: number) => void;
}

const QuizScreen = ({ onComplete }: QuizScreenProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showReaction, setShowReaction] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const currentQuestion = quizQuestions[currentIndex];
  const isLastQuestion = currentIndex === quizQuestions.length - 1;

  const handleAnswer = (optionIndex: number) => {
    if (selectedAnswer !== null) return; // Prevent double-clicking

    const correct = optionIndex === currentQuestion.correctAnswer;
    setSelectedAnswer(optionIndex);
    setIsCorrect(correct);
    setShowReaction(true);

    if (correct) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (isLastQuestion) {
      const finalScore = score;
      onComplete(finalScore);
    } else {
      setCurrentIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setShowReaction(false);
    }
  };

  const getOptionStyle = (index: number) => {
    if (selectedAnswer === null) {
      return "bg-card hover:bg-secondary border-border hover:border-primary/40 hover:shadow-md";
    }
    if (index === currentQuestion.correctAnswer) {
      return "bg-birthday-sage/30 border-birthday-sage text-foreground";
    }
    if (index === selectedAnswer && !isCorrect) {
      return "bg-birthday-rose/20 border-primary/50 text-foreground";
    }
    return "bg-card border-border opacity-50";
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8">
      <ScoreTracker
        currentQuestion={currentIndex}
        totalQuestions={quizQuestions.length}
        score={score}
      />

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.4 }}
          className="w-full max-w-lg"
        >
          <Card className="overflow-hidden shadow-lg border-border/50">
            {/* Photo */}
            <div className="relative aspect-[4/3] bg-secondary overflow-hidden">
              <img
                src={currentQuestion.photo}
                alt={`Quiz photo ${currentIndex + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 right-3 bg-card/80 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold text-foreground">
                📸 Photo {currentIndex + 1}
              </div>
            </div>

            {/* Question */}
            <div className="p-5 sm:p-6">
              <h2 className="font-cursive text-xl sm:text-2xl text-foreground mb-5 text-center">
                {currentQuestion.question}
              </h2>

              {/* Options */}
              <div className="grid gap-3">
                {currentQuestion.options.map((option, index) => (
                  <motion.button
                    key={index}
                    onClick={() => handleAnswer(index)}
                    disabled={selectedAnswer !== null}
                    className={`w-full text-left px-4 py-3 rounded-xl border-2 transition-all duration-200 font-medium text-sm sm:text-base ${getOptionStyle(index)}`}
                    whileHover={selectedAnswer === null ? { scale: 1.02 } : {}}
                    whileTap={selectedAnswer === null ? { scale: 0.98 } : {}}
                  >
                    <span className="mr-2 text-muted-foreground">
                      {String.fromCharCode(65 + index)}.
                    </span>
                    {option}
                    {selectedAnswer !== null && index === currentQuestion.correctAnswer && (
                      <Heart className="inline w-4 h-4 ml-2 text-primary fill-primary animate-heart-pop" />
                    )}
                    {selectedAnswer === index && !isCorrect && (
                      <X className="inline w-4 h-4 ml-2 text-primary" />
                    )}
                  </motion.button>
                ))}
              </div>

              {/* Reaction + Next button */}
              <AnimatePresence>
                {showReaction && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-5 text-center"
                  >
                    <p className="font-cursive text-lg mb-4 text-foreground">
                      {isCorrect
                        ? "You remembered! 💕✨"
                        : "Hehe, close enough! 🌸💕"}
                    </p>
                    <Button
                      onClick={handleNext}
                      className="rounded-full px-6 bg-primary text-primary-foreground"
                    >
                      {isLastQuestion ? "See My Score! 🎉" : "Next Question"}
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Card>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default QuizScreen;
