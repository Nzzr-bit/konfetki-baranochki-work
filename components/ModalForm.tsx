"use client";
import Image from "next/image";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useModal } from "./store/ModalContext";
import Form from "./modules/Form";
import { ModalConfirm } from "./modules/ModalConfirm";

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
  const { currentModal, hideModal } = useModal();
  const [isClosing, setIsClosing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
    setIsSuccess(true);
  };

  if (currentModal !== "form" && !isClosing && !isSuccess) return null;

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      hideModal();
      setIsClosing(false);
      setIsSuccess(false);
    }, 300);
  };

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-25 z-20 flex justify-end items-center ${
        isClosing ? "pointer-events-none" : ""
      }`}
      onClick={handleClose}>
      <div
        className={`w-[740px] ${
          isClosing ? "slide-out-right" : "slide-in-right"
        }`}
        onClick={(e) => e.stopPropagation()}>
        <div className="bg-white h-[100vh] relative ">
          <button onClick={handleClose} className="ml-20 mb-10 mt-10">
            <Image src="/ModalClose.svg" width={50} height={3} alt="arrow" />
          </button>
          <div className="grid ml-36 mr-24 ">
            {isSuccess ? (
              <ModalConfirm />
            ) : (
              <>
                <h4 className="text-ml font-bold mb-5">Отклик на вакансию</h4>
                <Form onSubmit={onSubmit} />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalForm;
