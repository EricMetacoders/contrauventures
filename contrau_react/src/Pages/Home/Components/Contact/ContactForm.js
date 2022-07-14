import React, { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";

import "./contactForm.scss";
import ic_file from "../../../../assets/homepage_img/ic_file.png";
import { homeServices } from "../../../../services/homeServices";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { isSubmitSuccessful },
    setError,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const file = data.attachFile[0];
    if (file.type != "application/pdf") {
      setError("attachFile", {
        type: "filetype",
        message: "Please upload pdf file only.",
      });
      return;
    } else {
      console.log("data", data);
      // call api
      // homeServices
      //   .postContactInfo(data)
      //   .then((res) => {
      //     console.log("res", res);
      //   })
      //   .catch((err) => {
      //     console.log("err", err);
      //   });
    }
  };

  // reset input fields
  // useEffect(() => {
  //   if (formState.isSubmitSuccessful) {
  //     reset({
  //       yourname: "",
  //       phone: "",
  //       message: "",
  //       phone: "",
  //       attachFile: "",
  //       title: "",
  //       email: "",
  //     });
  //   }
  // }, [formState, reset]);

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
          {errors.title?.type === "required" && (
            <p className="errorText">Please write the title !</p>
          )}
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
          {errors.title?.type === "required" && (
            <p className="errorText">Please write the message !</p>
          )}
        </div>
        <div className="hidden lg:block lg:mt-[12px] mt-[6px] relative ">
          <input
            {...register("attachFile")}
            type="file"
            id="file"
            name="attachFile"
            className="w-full lgl:h-[75px] bg-inputBg pt-[30px] pl-[100px] text-white  custom-file-input cursor-pointer"
          />
          <img
            src={ic_file}
            alt="file"
            className="absolute top-5 left-[30px]"
          />
          {errors.attachFile && (
            <p className="errorText"> {errors.attachFile?.message}</p>
          )}
        </div>
        <div id="contactD" className="block  lg:mt-[12px] lg:flex lg:space-x-4">
          <div className="w-full lg:w-[33%]">
            <input
              {...register("yourname", {
                required: true,
                pattern: /^[a-zA-Z ]+$/,
              })}
              type="text"
              id="yourname"
              name="yourname"
              placeholder="Your name"
              className="w-full  h-[40px]  mt-[6px] lg:mt-0 lg:h-[77px] bg-inputBg text-white pl-[26px]"
            />
            {errors.yourname?.type === "required" && (
              <p className="errorText ">Please write your name !</p>
            )}
            {errors.yourname?.type === "pattern" && (
              <p className="errorText ">Please check your name !</p>
            )}
          </div>
          <div className="w-full   lg:w-[33%]">
            <input
              {...register("phone", {
                required: true,
                pattern: /^\d+$/,
              })}
              type="text"
              id="phone"
              name="phone"
              placeholder="Phone Number"
              className="w-full  h-[40px]  mt-[6px] lg:mt-0  lg:h-[77px] bg-inputBg text-white pl-[26px]"
            />
            {errors.phone?.type === "required" && (
              <p className="errorText ">Please write your phone number !</p>
            )}
            {errors.phone?.type === "pattern" && (
              <p className="errorText ">Please check your phone number !</p>
            )}
          </div>
          <div className="lg:w-[33%]">
            <input
              {...register("email", {
                required: true,
                pattern: /\S+@\S+\.\S+/,
              })}
              type="text"
              id="email"
              name="email"
              placeholder="Your email"
              className="w-full  h-[40px]  mt-[6px] lg:mt-0   lg:h-[77px] bg-inputBg text-white pl-[26px]"
            />
            {errors.email?.type === "required" && (
              <p className="errorText ">Please write your email !</p>
            )}
            {errors.email?.type === "pattern" && (
              <p className="errorText ">Please check your email address !</p>
            )}
          </div>
        </div>

        {/* button submit */}
        <div className="flex items-center justify-center lg:justify-end  lg:mt-[44px] mt-[33px]">
          <button
            type="submit"
            className="popinsFont mb-0 lg:text-[24px] font-semibold w-[289px] h-[58px] lg:w-[339px] lg:h-[84px] bg-white text-black hover:bg-black hover:border hover:border-white hover:text-white transition-all cursor-pointer flex items-center justify-center"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}
