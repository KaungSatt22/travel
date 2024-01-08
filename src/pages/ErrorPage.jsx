import React from "react";
import { useNavigate } from "react-router-dom";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center h-[100vh] space-y-5">
      <p className="text-3xl italic font-bold">Something went wrong 😥</p>
      <p>{error.message || error.data}</p>
      <button
        onClick={() => navigate("/cities")}
        className="px-5 py-3 bg-yellow-400 rounded-lg text-white"
      >
        &larr; back to cities
      </button>
    </div>
  );
};

export default ErrorPage;
