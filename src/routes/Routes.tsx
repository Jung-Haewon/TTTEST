import Home from '@/pages/Home';
import Join from '@/pages/Join';
import Login from '@/pages/Login';
import RouteType from '@/types/RouteType';

// 라우터 목록
const MyRoutes: RouteType[] = [
  // 홈,
  {
    path: '/',
    meta: { title: 'Home' },
    component: Home,
  },
  // 로그인,
  {
    path: '/login',
    meta: { title: 'Login' },
    component: Login,
  },
  // 회원가입,
  {
    path: '/join',
    meta: { title: 'Join' },
    component: Join,
  },
];

export default MyRoutes;
