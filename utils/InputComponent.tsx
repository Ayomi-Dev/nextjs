import React from 'react'


interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

export const InputComponent = ({label, id, type="text", ...props }: InputProps) => {
  return (
    <div className="relative my-3 w-full">
      <input
        id={id}
        type={type}
        placeholder=" "
        required
        className="
          peer w-full border-b-2 border-blue-100 
          focus:border-blue-300 focus:outline-none
          p-2 bg-transparent text-[12px]
        "
        {...props}
      />
      <label
        htmlFor={id}
        className="
          absolute left-2 top-2 text-blue-200 transition-all  duration-200
          peer-placeholder-shown:top-2 peer-placeholder-shown:text-[0.8rem] peer-placeholder-shown:text-gray-400
          peer-focus:top-[-8px] peer-focus:text-[0.7rem] peer-focus:text-blue-300 peer-focus:opacity-100
          peer-not-placeholder-shown:top-[-8px] peer-not-placeholder-shown:text-[0.7rem] peer-not-placeholder-shown:text-blue-300 peer-not-placeholder-shown:opacity-100
        "
      >
        {label}
      </label>
    </div>
  )
}
