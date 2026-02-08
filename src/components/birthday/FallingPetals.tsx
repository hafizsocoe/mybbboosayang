import { useEffect, useState } from "react";

interface Petal {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
  opacity: number;
}

const FallingPetals = () => {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    const generatedPetals: Petal[] = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 6 + Math.random() * 8,
      size: 12 + Math.random() * 16,
      opacity: 0.4 + Math.random() * 0.5,
    }));
    setPetals(generatedPetals);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute animate-petal-fall"
          style={{
            left: `${petal.left}%`,
            animationDelay: `${petal.delay}s`,
            animationDuration: `${petal.duration}s`,
            opacity: petal.opacity,
            top: '-5%',
          }}
        >
          <svg
            width={petal.size}
            height={petal.size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2C12 2 8 6 8 10C8 14 12 16 12 16C12 16 16 14 16 10C16 6 12 2 12 2Z"
              fill="hsl(340, 45%, 75%)"
              opacity="0.8"
            />
            <path
              d="M12 8C12 8 6 10 4 14C2 18 6 20 6 20C6 20 10 18 12 14"
              fill="hsl(340, 35%, 80%)"
              opacity="0.6"
            />
            <path
              d="M12 8C12 8 18 10 20 14C22 18 18 20 18 20C18 20 14 18 12 14"
              fill="hsl(340, 40%, 78%)"
              opacity="0.6"
            />
          </svg>
        </div>
      ))}
    </div>
  );
};

export default FallingPetals;
