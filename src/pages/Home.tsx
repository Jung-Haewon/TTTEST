//플랫폼 홈

import MotionButton from '@/components/MotionButton';
import { logout } from '@/store/AuthSlice';
import { RootState } from '@/store/Store';
import PostType from '@/types/PostType';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { API } from '@/config';

function Home({ title }: { title: string }) {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  const [postList, setPostList] = useState<null | PostType[]>(null);

  const checkLogin = async () => {
    try {
      const token = Cookies.get('token');
      if (!token) {
        toast.error('로그인 상태가 아닙니다.');
        return;
      }

      const response = await axios.get(API.APIADMIN, {
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
      const response = await axios.get(API.APITEST);

      if (response.data) {
        toast.success('서버에 접근 가능합니다.');
      }
    } catch (err) {
      toast.error('서버에 접근할 수 없습니다.');
      console.log(err);
    }
  };

  const handleListClick = (id: number) => {
    window.location.href = `/detail/${id}`;
  };

  const handleCreateButton = () => {
    window.location.href = '/create';
  };

  useEffect(() => {
    const getPostList = async () => {
      try {
        const response = await axios.get(API.GETALLPOST);

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
      <section className="flex flex-col justify-start items-center gap-10 mt-10 w-full h-auto">
        <h1 className="text-4xl">홈 입니다.</h1>
        <div className="flex flex-row gap-[50px]">
          <MotionButton onClick={checkLogin} size={1}>
            로그인 확인하기
          </MotionButton>
          <MotionButton onClick={checkConnect} size={1}>
            접속 테스트
          </MotionButton>
        </div>
      </section>
      <section className="h-full mt-[80px]">
        <div className="flex flex-row justify-between">
          <h1 className="text-3xl font-bold">게시글 리스트</h1>
          <MotionButton onClick={handleCreateButton} size={1}>
            게시글 작성하기
          </MotionButton>
        </div>
        {postList && postList.length ? (
          <div className="flex flex-row w-full h-[200px] justify-center items-center">
            <ol>
              {postList.map((post) => (
                <li key={post.id} onClick={() => handleListClick(post.id)}>
                  <h3>{post.postTitle}</h3>
                </li>
              ))}
            </ol>
          </div>
        ) : (
          <div className="flex flex-row w-full h-[200px] justify-center items-center">
            <h2>게시글이 존재하지 않습니다.</h2>
          </div>
        )}
      </section>
    </>
  );
}

export default Home;
