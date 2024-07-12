"use client";
import Image from "next/image";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useModal } from "./store/ModalContext";
import Form from "./modules/Form";

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
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  if (!isModalVisible) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-25 z-20 flex justify-end items-center"
      onClick={hideModal}>
      <div className="w-[740px]" onClick={(e) => e.stopPropagation()}>
        <div className="bg-white py-[50vh] relative">
          <button onClick={hideModal} className="ml-20 mb-10">
            <Image src="/ModalClose.svg" width={44} height={2} alt="arrow" />
          </button>
          <div className="grid ml-36 mr-24">
            <h4 className="text-ml font-bold mb-5">Отклик на вакансию</h4>
            <Form onSubmit={onSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalForm;
