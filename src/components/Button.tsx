import { motion } from 'motion/react';
import { MouseEvent } from 'react';

interface MotionButton {
  children: string;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

function MotionButton({ children, onClick }: MotionButton) {
  return (
    <motion.button
      onClick={onClick}
      whileTap={{ scale: 0.99, backgroundColor: '#f0f0f0' }}
      className="w-full h-[44px] text-white bg-slate-800 rounded-lg"
    >
      {children}
    </motion.button>
  );
}

export default MotionButton;
