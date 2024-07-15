"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { InputComponent } from "./InputComponent";
import Link from "next/link";

enum VacancyEnum {
  chief = "Повар",
}

interface IFormInput {
  vacancy: VacancyEnum;
  lastName: string;
  firstName: string;
  middleName: string;
  phoneNumber: number;
  emailAddress: string;
  workExperience: string;
  whereHear: string;
  consent: boolean;
}

interface FormComponentProps {
  onSubmit: SubmitHandler<IFormInput>;
}

const Form: React.FC<FormComponentProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  return (
    <div className="overflow-y-auto max-h-[80vh]">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 mr-4 my-4 ">
        <div className="relative mb-5">
          <select
            className={`p-2 border-2 rounded-md appearance-none w-full bg-white pr-8 ${
              errors.vacancy ? "border-red-500" : ""
            }`}
            {...register("vacancy", { required: true })}>
            <option value="" disabled selected>
              Выберите вакансию
            </option>
            <option value="Повар">Повар</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-300">
            <svg
              className="fill-none h-4 w-4"
              viewBox="0 0 16 10"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M15 1.5L8 8.5L1 1.5"
                stroke="#C4C4C4"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          {errors.vacancy && (
            <span className="text-red-500 text-sm transform translate-y-full">
              Поле обязательно для заполнения
            </span>
          )}
        </div>
        <InputComponent
          type="input"
          placeholder="Фамилия*"
          register={register("lastName", { required: true })}
          error={errors.lastName}
        />
        <InputComponent
          type="input"
          placeholder="Имя*"
          register={register("firstName", { required: true })}
          error={errors.firstName}
        />
        <InputComponent
          type="input"
          placeholder="Отчество*"
          register={register("middleName", { required: true })}
          error={errors.middleName}
        />
        <InputComponent
          type="phone"
          placeholder="Телефон*"
          register={register("phoneNumber", { required: true })}
          error={errors.phoneNumber}
        />
        <InputComponent
          type="input"
          placeholder="Почта"
          register={register("emailAddress", { required: false })}
          error={errors.emailAddress}
        />
        <p className="font-medium pb-2"> Есть опыт работы?</p>
        <div className="flex mb-8">
          <div className="mr-5 font-medium flex items-center">
            <input
              className="mr-1"
              type="radio"
              value="Да"
              {...register("workExperience", { required: false })}
            />
            Да
          </div>
          <div className="mr-5 font-medium flex items-center">
            <input
              className="mr-1"
              type="radio"
              value="Нет"
              {...register("workExperience", { required: false })}
            />
            Нет
          </div>
        </div>
        <InputComponent
          type="input"
          placeholder="Расскажите откуда узнали про вакансию"
          register={register("whereHear", { required: false })}
          error={errors.whereHear}
        />
        <div className="flex items-center">
          <input
            className="mr-1"
            type="checkbox"
            {...register("consent", { required: true })}
          />
          Согласен на 
          <Link
            href="https://kbsladosti.ru/policy/"
            className="text-main-red underline">
            обработку персональных данных
          </Link>
        </div>
        {errors.consent && (
          <span className="text-red-500 text-sm">
            Подтвердите согласие на обработку персональных данных
          </span>
        )}
        <input
          className="rounded-md text-base font-semibold py-3 bg-black text-white mt-8"
          type="submit"
          value="Заполнить анкету"
        />
      </form>
    </div>
  );
};

export default Form;
