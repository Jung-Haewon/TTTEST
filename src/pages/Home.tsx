//플랫폼 홈

import MotionButton from '@/components/MotionButton';
import axios from 'axios';
import Cookies from 'js-cookie';
import toast from 'react-hot-toast';

function Home({ title }: { title: string }) {
  const checkLogin = async () => {
    try {
      const token = Cookies.get('token');
      if (!token) {
        toast.error('로그인 상태가 아닙니다.');
        return;
      }

      const response = await axios.get('http://localhost:8080/checkLogin', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log(response.data);

      toast.success('로그인 상태입니다.');
    } catch (err) {
      toast.error('통신에 실패했습니다.');
      console.log(err);
    }
  };

  const checkConnect = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/test`);

      if (response.data) {
        toast.success('서버에 접근 가능합니다.');
      }
    } catch (err) {
      toast.error('서버에 접근할 수 없습니다.');
      console.log(err);
    }
  };

  return (
    <>
      <title>{title}</title>
      <section className="flex flex-col justify-start items-center gap-10 mt-10 w-full h-full">
        <h1 className="text-4xl">홈 입니다.</h1>
        <MotionButton onClick={checkLogin} size={500}>
          로그인 확인하기
        </MotionButton>
        <MotionButton onClick={checkConnect}>접속 테스트</MotionButton>
      </section>
    </>
  );
}

export default Home;
