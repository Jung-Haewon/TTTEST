import { Ref } from 'react';

interface InputWithLabel {
  children: string;
  type: string;
  id: string;
  placeholder?: string;
  ref?: Ref<HTMLInputElement>;
}

function InputWithLabel({ children, type, id, placeholder, ref }: InputWithLabel) {
  return (
    <div role="none" className="flex flex-col justify-center items-start gap-2">
      <label id={id} className="text-2xl font-semibold text-center">
        {children}
      </label>
      {placeholder ? (
        <input
          id={id}
          type={type}
          className="w-full h-[44px] rounded-lg outl200 outline outline-2 outline-slate-200 p-2 focus:outline-red-500"
          placeholder={placeholder}
          ref={ref}
        />
      ) : (
        <input
          id={id}
          type={type}
          className="w-full h-[44px] rounded-lg outline outline-2 outline-slate-200 p-2 focus:outline-red-500"
          ref={ref}
        />
      )}
    </div>
  );
}

export default InputWithLabel;
