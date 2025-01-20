//게시글 작성

import InputWithLabel from '@/components/InputWithLabel';
import MotionButton from '@/components/MotionButton';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useRef } from 'react';
import toast from 'react-hot-toast';

function Create({ title }: { title: string }) {
  const titleInput = useRef<HTMLInputElement>(null);
  const bodyInput = useRef<HTMLTextAreaElement>(null);

  const handleCreateClick = async () => {
    try {
      const token = Cookies.get('token');

      if (!token) {
        toast.error('로그인 해주세요.');
        return;
      }

      const base64Payload = token?.split('.')[1];
      const base64 = base64Payload?.replace(/-/g, '+').replace(/_/g, '/');
      const decodedJWT = JSON.parse(
        decodeURIComponent(
          window
            .atob(base64)
            .split('')
            .map(function (c) {
              return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
            })
            .join('')
        )
      );

      const formatDate = (date: Date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');
        return `${year}:${month}:${day}:${hours}:${minutes}:${seconds}`;
      };

      const createResponse = await axios.post('http://localhost:8080/api/createpost', {
        postTitle: titleInput.current?.value,
        postBody: bodyInput.current?.value,
        writer: decodedJWT.username,
        date: formatDate(new Date()),
      });

      if (createResponse.data === 'create post') {
        toast.success('게시글 작성이 성공했습니다.');
        // 히스토리 교체 및 페이지 리디렉션
        window.history.replaceState(null, '', '/');
        window.location.href = '/';
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <title>{title}</title>
      <h1>게시글 작성하기</h1>
      <InputWithLabel type={`title`} id={`pw`} placeholder={`게시글 제목`} ref={titleInput}>
        게시글 제목
      </InputWithLabel>
      <div role="none" className="flex flex-col justify-center items-start gap-2">
        <label id="bodyInput" className="text-2xl font-semibold text-center">
          게시글 내용
        </label>
        <textarea
          id="bodyInput"
          className="w-full h-[500px] rounded-lg outl200 outline outline-2 outline-slate-200 p-2 focus:outline-red-500"
          placeholder="게시물 내용을 작성해 주세요."
          ref={bodyInput}
        />
      </div>
      <div className="flex flex-row w-full h-full">
        <MotionButton onClick={handleCreateClick}>작성하기</MotionButton>
      </div>
    </>
  );
}

export default Create;
