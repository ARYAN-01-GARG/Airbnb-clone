'use client';

import { format } from "path";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { BiDollar } from "react-icons/bi";

interface InputProps {
    id : string,
    label: string,
    type?: string,
    disabled?: boolean,
    formatPrice?: boolean,
    require?: boolean,
    register: UseFormRegister<FieldValues>
    errors: FieldErrors 
}

function Input({
    id,
    label,
    type = 'text',
    disabled,
    formatPrice,
    require,
    register,
    errors
}: InputProps) {
  return (
    <div className="w-full relative">
      { formatPrice && (
        <BiDollar
          size={24}
          className="absolute top-5 left-2 text-neutral-700"
        />
      )}
      <input 
        id={id}
        type={type}
        disabled={disabled}
        {...register(id , { required: require })}
        placeholder=""
        className = {`
          peer
          w-full
          p-4
          pt-6
          font-light
          bg-white
          border-2
          rounded-md
          outline-none
          transition
          diasbled:opacity-70
          disabled:cursor-not-allowed
          ${formatPrice ? 'pl-9' : 'pl-4'}
          ${errors[id] ? 'border-red-500' : 'border-neutral-300'}
          ${errors[id] ? 'focus:border-red-500' : 'focus:border-black'}
        `}
      />
      <label
        className = {`
          absolute
          text-md
          text-neutral-500
          duration-150
          transform
          -translate-y-3
          top-5
          z-10
          orgin-[0]
          ${formatPrice ? 'left-9' : 'left-4'}
          peer-placeholder-shown:scale-110
          peer-placeholder-shown:translate-y-0
          peer-focus:scale-75
          peer-focus:-translate-y-4
          ${errors[id] ? 'text-red-500' : 'text-zinc-400'}
          ${errors[id] ? 'peer-focus:text-red-500' : 'peer-focus:text-black'}
        `}
        htmlFor={id}
        >
          {label}
        </label>
    </div>
  )
}

export default Input