//회원가입

import MotionButton from '@/components/Button';
import InputWithLabel from '@/components/InputWithLabel';

function Join({ title }: { title: string }) {
  const login = () => {
    console.log('로그인 클릭');
  };

  const moveToJoin = () => {
    window.location.href = '/join';
  };

  return (
    <>
      <title>{title}</title>
      <div role="none" className="w-full h-full">
        <section className="flex justify-center align-middle w-full h-auto">
          <fieldset className="flex flex-col justify-center align-middle w-1/2 h-full mt-[88px] p-10 gap-10">
            <div className="w-full h-[1px] mb-5 bg-slate-400" />
            <InputWithLabel type={`text`} id={`id`} placeholder={`ID를 입력하세요`}>
              ID
            </InputWithLabel>
            <InputWithLabel type={`password`} id={`pw`} placeholder={`비밀번호를 입력하세요`}>
              PASSWORD
            </InputWithLabel>
            <div role="none" className="flex flex-col gap-2">
              <MotionButton onClick={login}>로그인</MotionButton>
              <MotionButton onClick={login}>회원가입</MotionButton>
            </div>
            <div className="w-full h-[1px] mt-5 bg-slate-400" />
          </fieldset>
        </section>
      </div>
    </>
  );
}

export default Join;
