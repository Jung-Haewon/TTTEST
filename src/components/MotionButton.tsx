import { motion } from 'motion/react';
import { MouseEvent, useEffect } from 'react';

interface MotionButton {
  children: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  size?: number;
}

function MotionButton({ children, onClick, size }: MotionButton) {
  return (
    <motion.button
      onClick={onClick}
      whileTap={{ scale: 0.99, backgroundColor: '#f0f0f0' }}
      className={
        size
          ? 'w-[200px] h-[44px] text-white bg-slate-800 rounded-lg'
          : 'w-full h-[44px] text-white bg-slate-800 rounded-lg'
      }
    >
      {children}
    </motion.button>
  );
}

export default MotionButton;
