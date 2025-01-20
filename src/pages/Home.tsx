//플랫폼 홈

import MotionButton from '@/components/MotionButton';
import { logout } from '@/store/AuthSlice';
import { RootState } from '@/store/Store';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';

function Home({ title }: { title: string }) {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  const [postList, setPostList] = useState(null);

  const checkLogin = async () => {
    try {
      const token = Cookies.get('token');
      if (!token) {
        toast.error('로그인 상태가 아닙니다.');
        return;
      }

      const response = await axios.get('http://localhost:8080/api/admin', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log(response.data);

      if (response.data === 'Admin Controller') {
        toast.success('로그인 상태입니다.');
      } else {
        toast.error('다시 로그인 해주세요.');

        await Cookies.remove('token');
        await dispatch(logout());
      }
    } catch (err) {
      toast.error('통신에 실패했습니다.');
      console.log(err);
    }
  };

  const checkConnect = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/test`);

      if (response.data) {
        toast.success('서버에 접근 가능합니다.');
      }
    } catch (err) {
      toast.error('서버에 접근할 수 없습니다.');
      console.log(err);
    }
  };

  useEffect(() => {
    const getPostList = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/getallpost');

        console.log(response.data);

        setPostList(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    getPostList();
  }, []);

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
      <section>
        <h1></h1>
      </section>
    </>
  );
}

export default Home;
