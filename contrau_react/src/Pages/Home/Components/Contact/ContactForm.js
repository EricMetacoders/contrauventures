import React, { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";

import "./contactForm.scss";
import ic_file from "../../../../assets/homepage_img/ic_file.png";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { isSubmitSuccessful },
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      phone: "",
      message: "",
      phone: "",
      title: "",
      file: "",
      email: "",
    },
  });
  const onSubmit = (data) => console.log(data);

  // reset input fields
  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({
        name: "",
        phone: "",
        message: "",
        phone: "",
        title: "",
        file: "",
        email: "",
      });
    }
  }, [formState, reset]);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            {...register("title", { required: true })}
            type="text"
            placeholder="Title"
            className=" lg:h-[75px]  w-full h-[40px] bg-inputBg pl-[26px] text-white"
            id="title"
            name="title"
          />
        </div>
        <div className="lg:mt-[12px] mt-[6px]">
          <input
            {...register("message", { required: true })}
            type="text"
            placeholder="Message"
            id="message"
            name="message"
            className="w-full lg:h-[191px] h-[116px] lg:pb-[117px] bg-inputBg pl-[26px] text-white"
          />
        </div>
        <div className="hidden lg:block lg:mt-[12px] mt-[6px] relative ">
          <input
            {...register("file")}
            type="file"
            id="file"
            name="file"
            className="w-full lgl:h-[75px] bg-inputBg pt-[30px] pl-[100px] text-white  custom-file-input cursor-pointer"
          />
          <img
            src={ic_file}
            alt="file"
            className="absolute top-5 left-[30px]"
          />
        </div>
        <div
          id="contactD"
          className="mt-[6px] block  lg:mt-[12px] lg:flex lg:space-x-4"
        >
          <input
            {...register("name", { required: true })}
            type="text"
            id="name"
            name="name"
            placeholder="Your name"
            className="w-full mt-[6px] h-[40px] lg:mt-0 lg:w-[33%] lg:h-[77px] bg-inputBg lg:pl-[26px] text-white"
          />
          <input
            {...register("phone", { required: true })}
            type="text"
            id="phone"
            name="phone"
            placeholder="Phone Number"
            className="w-full mt-[6px] h-[40px] lg:mt-0 lg:w-[33%] lg:h-[77px] bg-inputBg lg:pl-[26px] text-white"
          />
          <input
            {...register("email", { required: true })}
            type="text"
            id="email"
            name="email"
            placeholder="Email"
            className="w-full mt-[6px] h-[40px] lg:mt-0 lg:w-[33%] lg:h-[77px] bg-inputBg lg:pl-[26px] text-white"
          />
        </div>

        {/* button submit */}
        <div className="flex items-center justify-center lg:justify-end  lg:mt-[44px] mt-[33px]">
          <div className="w-[289px] h-[58px] lg:w-[339px] lg:h-[84px] bg-white text-black hover:bg-black hover:border hover:border-white hover:text-white transition-all cursor-pointer flex items-center justify-center">
            <button
              type="submit"
              className="popinsFont mb-0 cursor-pointer lg:text-[24px] font-semibold"
            >
              Send Message
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
