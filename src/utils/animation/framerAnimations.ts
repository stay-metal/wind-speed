// src/utils/animation/framerAnimations.ts
// Define a type for animation properties
type AnimationProps = {
  initial: object;
  animate: object;
  transition: object;
  exit: object;
};

// Predefined animation properties with dynamic delay
export const fadeInUp: (duration: number, delay: number) => AnimationProps = (
  duration,
  delay
) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
  transition: { duration, delay },
});

// You can add more predefined animations here
export const fadeInDown: (duration: number, delay: number) => AnimationProps = (
  duration,
  delay
) => ({
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration, delay },
});

export const fadeIn: (duration: number, delay: number) => AnimationProps = (
  duration,
  delay
) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 1 },
  transition: { duration, delay },
});

export const fadeInWithScale: (
  duration: number,
  delay: number
) => AnimationProps = (duration, delay) => ({
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, y: 0.9 },
  transition: { duration, delay },
});

export const bgColorAnimationFadeIn: (
  duration: number,
  delay: number,
  opacity: number
) => AnimationProps = (duration, delay, opacity) => ({
  initial: { opacity: 0 },
  animate: { opacity: opacity },
  exit: { opacity: 0 },
  transition: { duration, delay },
});
