import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { birthdayConfig } from "@/data/quizQuestions";
import FallingPetals from "./FallingPetals";

interface IntroScreenProps {
  onStart: () => void;
}

const IntroScreen = ({ onStart }: IntroScreenProps) => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen px-4 overflow-hidden">
      <FallingPetals />

      {/* Decorative flowers */}
      <div className="absolute top-8 left-8 text-4xl animate-float opacity-60">🌸</div>
      <div className="absolute top-16 right-12 text-3xl animate-float" style={{ animationDelay: "1s" }}>🌷</div>
      <div className="absolute bottom-20 left-16 text-3xl animate-float" style={{ animationDelay: "0.5s" }}>🌺</div>
      <div className="absolute bottom-32 right-8 text-4xl animate-float" style={{ animationDelay: "1.5s" }}>🌼</div>

      <motion.div
        className="relative z-10 text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Name reveal */}
        <motion.h1
          className="font-cursive text-5xl sm:text-7xl md:text-8xl text-primary mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          {birthdayConfig.name}
        </motion.h1>

        {/* Birthday message */}
        <motion.p
          className="font-cursive text-2xl sm:text-3xl md:text-4xl text-accent-foreground mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          {birthdayConfig.birthdayMessage}
        </motion.p>

        {/* Subtitle */}
        <motion.p
          className="text-muted-foreground text-base sm:text-lg mb-10 max-w-md mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          I made a little quiz just for you... Let's see how well you remember our moments together! 🌸
        </motion.p>

        {/* Start button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2, duration: 0.5, type: "spring" }}
        >
          <Button
            onClick={onStart}
            size="lg"
            className="rounded-full px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-primary text-primary-foreground"
          >
            <Heart className="w-5 h-5 mr-2" />
            Start the Quiz
            <Heart className="w-5 h-5 ml-2" />
          </Button>
        </motion.div>
      </motion.div>

      {/* Bottom decorative line */}
      <motion.div
        className="absolute bottom-8 flex gap-2 items-center text-muted-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 0.8 }}
      >
        <span className="text-sm">Made with</span>
        <Heart className="w-4 h-4 text-primary fill-primary" />
        <span className="text-sm">for you</span>
      </motion.div>
    </div>
  );
};

export default IntroScreen;
