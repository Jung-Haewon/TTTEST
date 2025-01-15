import NavMenu from '@/components/NavMenu';
import { logout } from '@/store/AuthSlice';
import { RootState } from '@/store/Store';
import { motion } from 'motion/react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function Layout() {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  const [color, setColor] = useState('#000000');
  const [textColor, setTextColor] = useState('#ffffff');
  const [intervalId, setIntervalId] = useState<number | null>(null);

  const handleLogout = () => {
    dispatch(logout());
  };

  const log = () => {
    console.log('로그아웃');
  };

  const startColorChange = () => {
    const id = window.setInterval(() => {
      setColor(getRandomColor());
    }, 100); // 500ms 간격으로 색상 변경
    setIntervalId(id);
  };
  const stopColorChange = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
    setColor('#000000'); // 검은색으로 돌아옴
  };

  return (
    <div role="none" className="flex justify-center align-middle w-full h-screen">
      <div role="none" className="flex flex-col justify-center align-middle w-full h-full min-w-[650px] max-w-[900px]">
        <header>
          <nav className="w-full flex flex-row gap-6 justify-center relative">
            <motion.button
              whileHover={{ scale: 1.2 }}
              onMouseEnter={startColorChange}
              onMouseLeave={stopColorChange}
              style={{ backgroundColor:color, color: textColor, transition: 'color 0.2s ease-in-out' }}
              className="rounded-2xl"
            >
              <Link to={'/'} className="flex p-8 text-4xl font-bold">
                Warhammer 40k
              </Link>
            </motion.button>
            <ul className="absolute right-4 -translate-y-1/2 top-1/2">
              {isLoggedIn ? (
                <motion.button onClick={log}>로그아웃</motion.button>
              ) : (
                <NavMenu path={'/login'}>로그인</NavMenu>
              )}
            </ul>
          </nav>
        </header>
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
