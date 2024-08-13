import React from "react";
import { SiMinutemailer } from "react-icons/si";

const SignupMessage = ({ email, message }) => {
  return (
    <div className="flex flex-col gap-7 items-center">
      <SiMinutemailer className="h-10 w-10 text-blue-500" />
      <span className="font-bold text-2xl">Please verify your email</span>
      <div className="flex flex-col text-center">
        <span>You're almost there! We sent an email to</span>
        <span className="font-bold">{email}</span>
      </div>
      <span className="text-center">
        Just click on the link in that email to complete your signup. if you
        don't see it, you may need to <b>check your spam</b> folder
      </span>
      <span>Still can't find the email? No problem.</span>
      <button className="text-white bg-blue-500 p-3 rounded-md hover:bg-green-500">
        Resend Verification Email
      </button>
    </div>
  );
};

export default SignupMessage;
