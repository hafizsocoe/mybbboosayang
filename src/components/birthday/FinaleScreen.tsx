import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Heart, Play, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { birthdayConfig, quizQuestions } from "@/data/quizQuestions";
import FallingPetals from "./FallingPetals";

interface FinaleScreenProps {
  score: number;
}

interface ConfettiPiece {
  id: number;
  left: number;
  delay: number;
  duration: number;
  color: string;
}

const FinaleScreen = ({ score }: FinaleScreenProps) => {
  const [showVideo, setShowVideo] = useState(false);
  const [confetti, setConfetti] = useState<ConfettiPiece[]>([]);

  const totalQuestions = quizQuestions.length;

  useEffect(() => {
    const colors = [
      "hsl(340, 45%, 65%)",
      "hsl(340, 30%, 85%)",
      "hsl(38, 60%, 65%)",
      "hsl(30, 40%, 96%)",
      "hsl(140, 20%, 70%)",
    ];
    const pieces: ConfettiPiece[] = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 3 + Math.random() * 4,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
    setConfetti(pieces);
  }, []);

  const getScoreMessage = () => {
    const pct = score / totalQuestions;
    if (pct >= 0.9) return "You know us so well! 🥺💕";
    if (pct >= 0.7) return "Amazing memory, my love! 🌸";
    if (pct >= 0.5) return "We have so many beautiful memories! 💕";
    return "Every moment with you is unforgettable! 🌷";
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen px-4 py-8 overflow-hidden">
      <FallingPetals />

      {/* Confetti */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {confetti.map((piece) => (
          <div
            key={piece.id}
            className="absolute animate-confetti"
            style={{
              left: `${piece.left}%`,
              top: "-5%",
              animationDelay: `${piece.delay}s`,
              animationDuration: `${piece.duration}s`,
            }}
          >
            <div
              className="w-3 h-3 rounded-sm"
              style={{ backgroundColor: piece.color, transform: `rotate(${Math.random() * 360}deg)` }}
            />
          </div>
        ))}
      </div>

      <motion.div
        className="relative z-10 text-center max-w-lg w-full"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Sparkle decoration */}
        <motion.div
          className="flex justify-center gap-2 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <Sparkles className="w-6 h-6 text-birthday-gold animate-sparkle" />
          <Sparkles className="w-8 h-8 text-primary animate-sparkle" style={{ animationDelay: "0.5s" }} />
          <Sparkles className="w-6 h-6 text-birthday-gold animate-sparkle" style={{ animationDelay: "1s" }} />
        </motion.div>

        {/* Score reveal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <h1 className="font-cursive text-4xl sm:text-5xl text-primary mb-3">
            🎉 You scored 🎉
          </h1>
          <motion.p
            className="text-6xl sm:text-7xl font-bold text-foreground mb-2"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1, type: "spring", stiffness: 200 }}
          >
            {score}/{totalQuestions}
          </motion.p>
          <p className="font-cursive text-xl sm:text-2xl text-accent-foreground mb-2">
            {getScoreMessage()}
          </p>
        </motion.div>

        {/* Love message */}
        <motion.p
          className="text-muted-foreground text-sm sm:text-base mb-8 max-w-sm mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          {birthdayConfig.endMessage}
        </motion.p>

        {/* Video section */}
        {!showVideo ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2, type: "spring" }}
          >
            <Button
              onClick={() => setShowVideo(true)}
              size="lg"
              className="rounded-full px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-primary text-primary-foreground"
            >
              <Play className="w-5 h-5 mr-2" />
              Play Your Surprise! 🎁
              <Heart className="w-5 h-5 ml-2 fill-primary-foreground" />
            </Button>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-primary/20 bg-card">
              {/* Replace this with your actual video */}
              <div className="aspect-video flex items-center justify-center bg-secondary">
                <div className="text-center p-8">
                  <Play className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
                  <p className="text-muted-foreground text-sm">
                    Upload your video and replace this placeholder!
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Use a {"<video>"} tag with your uploaded file
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Bottom hearts */}
        <motion.div
          className="flex justify-center gap-3 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
        >
          {["🌸", "💕", "🌷", "💕", "🌸"].map((emoji, i) => (
            <span
              key={i}
              className="text-2xl animate-float"
              style={{ animationDelay: `${i * 0.3}s` }}
            >
              {emoji}
            </span>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default FinaleScreen;
