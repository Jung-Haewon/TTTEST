import Home from '@/pages/Home';
import Join from '@/pages/Join';
import Login from '@/pages/Login';
import Detail from '@/pages/Detail';
import RouteType from '@/types/RouteType';
import Create from '@/pages/Create';

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
  // 게시글 조회,
  {
    path: '/detail/:id',
    meta: { title: 'Detail' },
    component: Detail,
  },
  // 게시글 작성,
  {
    path: '/create',
    meta: { title: 'Create' },
    component: Create,
  },
  // 게시글 수정,
  {
    path: '/edit/:id',
    meta: { title: 'Edit' },
    component: Join,
  },
];

export default MyRoutes;
