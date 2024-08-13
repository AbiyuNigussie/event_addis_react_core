import React, { useState } from "react";
import Signup from "../../components/Signup/Signup";
import SignupMessage from "../../components/Signup/SignupMessage";
import apiService from "../../api/apiServices";
import { redirect } from "react-router-dom";
import UserContext from "../../contexts/UserContext";

const SignUpPage = () => {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const onSubmit = (data) => {
    setEmail(data.email);
    apiService
      .post("api/user/signup", data)
      .then((response) => {
        console.log("Data sent successfully:", response.data);
        setMessage(response.data.message);

        return redirect("/");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <div className="h-full flex justify-center items-center md:bg-black/5">
      {message ? (
        <>
          <div className="flex-1 md:max-w-xl">
            <div className="px-8 py-6 mt-4 text-left bg-white rounded-lg md:shadow-lg">
              <SignupMessage email={email} message={message}></SignupMessage>
            </div>
          </div>
        </>
      ) : (
        <Signup onSubmit={onSubmit} />
      )}
    </div>
  );
};

export default SignUpPage;
