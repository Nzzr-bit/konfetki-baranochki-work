"use client";
import Image from "next/image";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useModal } from "./store/ModalContext";
import { InputComponent } from "./modules/InputComponent";

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

export const ModalForm = () => {
  const { isModalVisible, hideModal } = useModal();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  if (!isModalVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 z-20 flex justify-end items-center">
      <div className="w-[840px]">
        <div className="bg-white py-[50vh] relative">
          <button onClick={hideModal} className="absolute top-96  ml-16">
            <Image src="/ModalClose.svg" width={44} height={2} alt="arrow" />
          </button>
          <div className="grid mr-36 ml-36">
            <h4 className="text-ml font-bold mb-5">Отклик на вакансию</h4>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="grid grid-cols-1">
              <div className="relative">
                <select
                  className={`p-2 mb-5 border-2 rounded-md appearance-none w-full bg-white ${
                    errors.vacancy ? "border-red-500" : ""
                  }`}
                  {...register("vacancy", { required: true })}>
                  <option value="chief">Повар</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-6 pb-5 text-gray-300">
                  <svg
                    className="fill-none h-4 w-4"
                    viewBox="0 0 16 10"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M15 1.5L8 8.5L1 1.5"
                      stroke="#C4C4C4"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                {errors.vacancy && (
                  <span className="text-red-500 text-sm">
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
                type="input"
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
                <div className="mr-5 font-medium">
                  <input
                    className="mr-1"
                    type="radio"
                    value="Да"
                    {...register("workExperience", {
                      required: false,
                    })}
                  />
                  Да
                </div>
                <div className="mr-5 font-medium">
                  <input
                    className="mr-1"
                    type="radio"
                    value="Нет"
                    {...register("workExperience", {
                      required: false,
                    })}
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
              <div className="flex">
                <input
                  className="mr-1"
                  type="checkbox"
                  {...register("consent", {
                    required: true,
                  })}
                />
                Согласен на обработку персональных данных
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
        </div>
      </div>
    </div>
  );
};

export default ModalForm;
