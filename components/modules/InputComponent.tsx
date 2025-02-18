"use client";
import React from "react";
import InputMask from "react-input-mask";

interface InputComponentProps {
  type: string;
  placeholder: string;
  register: any;
  error: any;
}

export const InputComponent: React.FC<InputComponentProps> = ({
  type,
  placeholder,
  register,
  error,
}) => {
  if (type === "phone") {
    return (
      <div className="relative mb-5">
        <InputMask
          mask="+7(999)-999-99-99"
          maskChar=" "
          className={`p-2 border-2 rounded-md w-full ${
            error ? "border-red-500" : ""
          }`}
          placeholder={placeholder}
          {...register}
        />
        {error && (
          <span className="text-red-500 text-xs lg:text-s">
            Поле обязательно для заполнения
          </span>
        )}
      </div>
    );
  }

  return (
    <div className="relative mb-5">
      <input
        type={type}
        className={`p-2 border-2 rounded-md w-full ${
          error ? "border-red-500" : ""
        }`}
        placeholder={placeholder}
        {...register}
      />
      {error && (
        <span className="text-red-500 text-xs lg:text-s">
          Поле обязательно для заполнения
        </span>
      )}
    </div>
  );
};
