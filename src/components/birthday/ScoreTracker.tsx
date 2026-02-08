import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";
import { Heart } from "lucide-react";

interface ScoreTrackerProps {
  currentQuestion: number;
  totalQuestions: number;
  score: number;
}

const ScoreTracker = ({ currentQuestion, totalQuestions, score }: ScoreTrackerProps) => {
  const progress = ((currentQuestion) / totalQuestions) * 100;

  return (
    <div className="w-full max-w-lg mx-auto mb-6">
      <div className="flex justify-between items-center mb-2 text-sm font-medium">
        <span className="text-muted-foreground">
          Question {currentQuestion + 1} of {totalQuestions}
        </span>
        <motion.span
          className="flex items-center gap-1 text-primary font-semibold"
          key={score}
          initial={{ scale: 1.3 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring" }}
        >
          <Heart className="w-4 h-4 fill-primary" />
          {score} / {totalQuestions}
        </motion.span>
      </div>
      <Progress value={progress} className="h-3 bg-secondary" />
    </div>
  );
};

export default ScoreTracker;
