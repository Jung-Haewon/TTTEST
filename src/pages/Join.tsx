//회원가입

import MotionButton from '@/components/MotionButton';
import InputWithLabel from '@/components/InputWithLabel';
import axios from 'axios';
import { useRef } from 'react';
import toast from 'react-hot-toast';

function Join({ title }: { title: string }) {
  const idInput = useRef<HTMLInputElement>(null);
  const pwInput = useRef<HTMLInputElement>(null);
  const pwConfirmInput = useRef<HTMLInputElement>(null);

  const join = async () => {
    if (idInput.current && pwInput.current && pwConfirmInput.current) {
      if (pwInput.current.value === pwConfirmInput.current.value) {
        try {
          const formData = new FormData();
          formData.append('username', idInput.current.value);
          formData.append('password', pwInput.current.value);

          const response = await axios.post(`http://54.234.229.182:8080/api/join`, formData);

          if (response.data === 'exist') {
            toast.error('이미 존재하는 아이디 입니다.');
          } else if (response.data === 'join') {
            toast.success('회원가입 성공! 로그인 페이지로 이동합니다.');
            window.location.href = '/login';
          }
        } catch (err) {
          toast.error('회원가입에 실패했습니다. 다시 시도해 주세요.');
          console.log(err);
        }
      } else {
        toast.error('비밀번호 확인을 정확히 입력해 주세요.');
        return;
      }
    }
  };

  return (
    <>
      <title>{title}</title>
      <div role="none" className="w-full h-full">
        <section className="flex justify-center align-middle w-full h-auto">
          <fieldset className="flex flex-col justify-center align-middle w-1/2 h-full mt-[88px] p-10 gap-10">
            <div className="w-full h-[1px] mb-5 bg-slate-400" />
            <InputWithLabel type={`text`} id={`id`} placeholder={`ID를 입력하세요`} ref={idInput}>
              ID
            </InputWithLabel>
            <InputWithLabel type={`password`} id={`pw`} placeholder={`비밀번호를 입력하세요`} ref={pwInput}>
              PASSWORD
            </InputWithLabel>
            <InputWithLabel
              type={`password`}
              id={`pwConfirm`}
              placeholder={`비밀번호를 입력하세요`}
              ref={pwConfirmInput}
            >
              PASSWORD CONFIRM
            </InputWithLabel>
            <div role="none" className="flex flex-col gap-2">
              <MotionButton onClick={join}>회원가입</MotionButton>
            </div>
            <div className="w-full h-[1px] mt-5 bg-slate-400" />
          </fieldset>
        </section>
      </div>
    </>
  );
}

export default Join;
