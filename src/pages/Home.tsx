//플랫폼 홈

import MotionButton from '@/components/Button';
import axios from 'axios';

function Home({ title }: { title: string }) {
  const checkLogin = () => {
    console.log('로그인 확인');
  };

  const checkConnect = async () => {
    try{
      const response = await axios.get(`http://localhost:8080/test`);
      console.log(response);
    }
    catch(err) {console.log(err)}
  }

  return (
    <>
      <title>{title}</title>
      <section className="flex flex-col justify-start items-center gap-10 mt-10 w-full h-full">
        <h1 className="text-4xl">홈 입니다.</h1>
        <MotionButton onClick={checkLogin}>로그인 확인하기</MotionButton>
        <MotionButton onClick={checkConnect}>접속 테스트</MotionButton>
      </section>
    </>
  );
}

export default Home;
