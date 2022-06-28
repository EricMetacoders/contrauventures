import React, { useState, useRef } from "react";
import "./contactForm.css";
import ic_file from "../../../../assets/homepage_img/ic_file.png";
export default function ContactForm() {
  const [message, setMessage] = useState(null);
  const [title, setTitle] = useState(null);
  const [name, setName] = useState(null);
  const [phone, setPhone] = useState(null);
  const [email, setEmail] = useState(null);
  const [file, setFile] = useState(null);
  const handleSubmit = () => {
    const newMessage = {
      message,
      title,
      name,
      phone,
      email,
      file,
    };

    setTitle(null);
    setMessage(null);
    setName(null);
    setPhone(null);
    setEmail(null);
    setFile(null);

    // reset form
    handleClick();

    //  call api
  };
  const formRef = useRef();

  const handleClick = () => {
    formRef.current.reset();
  };

  return (
    <div>
      <form ref={formRef}>
        <div>
          <input
            type="text"
            placeholder="Title"
            className=" 2xl:h-[75px]  w-full h-[40px] bg-inputBg pl-[26px] text-white"
            id="title"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="2xl:mt-[12px] mt-[6px]">
          <input
            type="text"
            placeholder="Message"
            id="message"
            className="w-full 2xl:h-[191px] h-[116px] 2xl:pb-[117px] bg-inputBg pl-[26px] text-white"
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
        </div>
        <div className="hidden 2xl:block 2xl:mt-[12px] mt-[6px] relative ">
          <input
            type="file"
            id="file"
            className="w-full 2xl:h-[75px] bg-inputBg pt-[30px] pl-[100px] text-white  custom-file-input cursor-pointer"
            onChange={(e) => {
              setFile(e.target.files[0]);
            }}
          />
          <img
            src={ic_file}
            alt="file"
            className="absolute top-5 left-[30px]"
          />
        </div>
        <div className="hidden 2xl:block 2xl:mt-[12px] space-x-4">
          <input
            type="text"
            id="name"
            placeholder="Your name"
            className="2xl:w-[315px] 2xl:h-[77px] bg-inputBg pl-[26px] text-white"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            type="text"
            id="phone"
            placeholder="Phone Number"
            className="2xl:w-[315px] 2xl:h-[77px] bg-inputBg pl-[26px] text-white"
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
          <input
            type="text"
            id="email"
            placeholder="Email"
            className="2xl:w-[315px] 2xl:h-[77px] bg-inputBg pl-[26px] text-white"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="2xl:hidden mt-[6px]">
          <div>
            <input
              type="text"
              id="name"
              placeholder="Your name"
              className="w-full h-[40px] bg-inputBg pl-[26px] text-white"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="mt-[6px]">
            <input
              type="text"
              id="phone"
              placeholder="Phone Number"
              className="w-full h-[40px] bg-inputBg pl-[26px] text-white"
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
          </div>
          <div className="mt-[6px]">
            <input
              type="text"
              id="email"
              placeholder="Email"
              className="w-full h-[40px] bg-inputBg pl-[26px] text-white"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="flex items-center justify-center 2xl:justify-end  2xl:mt-[44px] mt-[33px]">
          <div
            className="w-[289px] h-[58px] 2xl:w-[339px] 2xl:h-[84px] bg-white text-black hover:bg-black hover:border hover:border-white hover:text-white transition-all cursor-pointer flex items-center justify-center"
            onClick={handleSubmit}
          >
            <p className="popinsFont mb-0 cursor-pointer 2xl:text-[24px] font-semibold">
              Send Message
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}
