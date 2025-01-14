import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

interface NavMenu {
  children: string;
  path: string;
}

function NavMenu({ children, path }: NavMenu) {
  return (
    <li className="">
      <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }}>
        <Link className="flex px-6 py-2 bg-slate-400 text-white font-extrabold rounded-lg text-xl" to={path}>
          {children}
        </Link>
      </motion.button>
    </li>
  );
}

export default NavMenu;
