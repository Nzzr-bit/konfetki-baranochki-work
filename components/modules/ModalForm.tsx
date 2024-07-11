"use client";
import Image from "next/image";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useModal } from "../store/ModalContext";

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
}

export const ModalForm: React.FC = () => {
  const { isModalVisible, hideModal } = useModal();
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  if (!isModalVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 z-20 flex justify-end items-center">
      <div className="w-[840px]">
        <div className="bg-white py-[50vh] relative">
          <button onClick={hideModal} className="absolute top-80 ml-16">
            <Image src="/ModalClose.svg" width={44} height={2} alt="arrow" />
          </button>
          <div className="grid mr-36  ml-36">
            <h4 className="text-lg1 font-bold mb-5">Отклик на вакансию</h4>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="grid grid-cols-1">
              <select className="p-3 mb-5 " {...register("vacancy")}>
                <option value="chief">Повар</option>
              </select>
              <input
                className="p-3 mb-5 "
                {...register("lastName")}
                placeholder="Фамилия*"
              />
              <input
                className="p-3 mb-5"
                {...register("firstName")}
                placeholder="Имя*"
              />
              <input
                className="p-3 mb-5"
                {...register("middleName")}
                placeholder="Отчество*"
              />
              <input
                className="p-3 mb-5"
                {...register("phoneNumber")}
                placeholder="Телефон*"
              />
              <input
                className="p-3 mb-5"
                {...register("emailAddress")}
                placeholder="Почта"
              />
              <input className="p-3 mb-5" type="submit" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
