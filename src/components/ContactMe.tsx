import React from "react";
// import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { SubmitHandler, useForm } from "react-hook-form";
import { useTheme } from "@/context/ThemeContext";

type Props = {};

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactMe = (props: Props) => {
  const { register, handleSubmit } = useForm<Inputs>();
  const { theme } = useTheme();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:gmtiwale@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
  };
  return (
    <div className="h-screen relative flex flex-col text-center md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3
        className="absolute top-20 lg:top-24 uppercase tracking-[1rem] text-gray-500 text-2xl font-bold"
        style={{
          color: "var(--color-primary)",
          textShadow:
            theme === "dark" ? "1px 1px 5px var(--color-contrast)" : "",
        }}
      >
        Contact Me
      </h3>
      <div className="flex flex-col space-y-10 mt-20">
        <div className="space-y-10">
          {/* <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#1976d2] h-7 w-7 animate-pulse" />
            <p className="text-2xl">+1234567890</p>
          </div> */}

          {/* <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#1976d2] h-7 w-7 animate-pulse" />
            <p className="text-2xl">Fresno, CA</p>
          </div> */}

          {/* <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#1976d2] h-7 w-7 animate-pulse" />
            <p className="text-2xl">gmtiwale@gmail.com</p>
          </div> */}
        </div>

        <form
          className="flex flex-col space-y-4 w-fit mx-auto text-center justify-center items-center"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h4
            className="text-4xl mb-5 font-semibold text-center"
            style={{
              color: "var(--color-primary)",
              textShadow:
                theme === "dark" ? "1px 1px 5px var(--color-contrast)" : "",
            }}
          >
            Lets Talk...
          </h4>
          <div className="flex flex-col space-y-4 w-full md:space-y-0 md:flex-row md:space-x-2">
            <input
              {...register("name")}
              placeholder="Full Name"
              className="contactInput"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput"
              type="email"
            />
          </div>
          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput w-full"
            type="text"
          />

          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput w-full"
            rows={5}
          />
          <button
            type="submit"
            className="bg-[#1976d2] animate-pulse py-2 px-10 rounded-md text-white font-bold text-lg w-4/6  flex items-center justify-center text-center"
            style={{
              backgroundColor: "var(--color-primary)",
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
