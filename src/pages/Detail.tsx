//게시판 상세

import MotionButton from '@/components/MotionButton';
import PostType from '@/types/PostType';
import axios from 'axios';
import { del } from 'motion/react-client';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';

function Detail({ title }: { title: string }) {
  const postId = useParams().id;
  const [postDetail, setPostDetail] = useState<PostType>();

  useEffect(() => {
    const getPostDetail = async () => {
      try {
        const response = await axios.get(`http://54.234.229.182:8080/api/getpost/${postId}`);
        
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    };

    getPostDetail();
  });

  const handleHomeClick = () => {
    window.location.href = '/';
  };

  const handleDelete = async () => {
    try {
      const deleteResponse = await axios.delete(`http://54.234.229.182:8080/api/deletepost`, {
        data: { id: postId },
      });

      if (deleteResponse.data === true) {
        toast.success('삭제되었습니다.');

        // 히스토리 교체 및 페이지 리디렉션
        window.history.replaceState(null, '', '/');
        window.location.href = '/';
      } else {
        toast.error('삭제에 실패했습니다. 다시 시도해 주세요.');
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <title>{title}</title>
      <h1>게시글 상세 조회</h1>
      <div className="flex flex-row w-full h-full">
        {postDetail ? (
          <div>
            <p>${postDetail.postTitle}</p>
            <p>${postDetail.postBody}</p>
          </div>
        ) : (
          <p>게시글 데이터를 불러오지 못했습니다.</p>
        )}
        <MotionButton onClick={handleDelete}>삭제하기</MotionButton>
        <MotionButton onClick={handleHomeClick}>돌아가기</MotionButton>
      </div>
    </>
  );
}

export default Detail;
