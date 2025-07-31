"use client";

import { useState, useCallback, useEffect, useMemo } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState({
    type: "",
    text: "",
  });
  const [isExiting, setIsExiting] = useState(false);

  const handleChange = useCallback((e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setResponseMessage({ type: "", text: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setResponseMessage({ type: "success", text: result.message });
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          message: "",
        });
      } else {
        setResponseMessage({ type: "error", text: result.message });
      }
    } catch {
      setResponseMessage({
        type: "error",
        text: "An error occurred. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const closeModal = () => {
    setIsExiting(true);
    setTimeout(() => {
      setResponseMessage({ type: "", text: "" });
      setIsExiting(false);
    }, 300);
  };

  useEffect(() => {
    if (responseMessage.text) {
      const timer = setTimeout(() => {
        closeModal();
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [responseMessage.text]);

  const messageText = useMemo(
    () => responseMessage.text,
    [responseMessage.text]
  );

  return (
    <div
      onSubmit={handleSubmit}
      className="flex flex-col space-y-4 py-12 md:py-16 lg:py-20"
    >
      <div className="grid grid-cols-2 gap-6">
        <div className="flex flex-col">
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            autoComplete="given-name"
            required
            placeholder="First name"
            className="w-full py-2 text-sm md:text-base text-black placeholder-black/30 bg-transparent border-0 border-b-1 border-black/30 focus:border-[#f37a35] dark:border-white/30 dark:text-white dark:placeholder-white/30 transition-all duration-300 focus:outline-none"
          />
        </div>

        <div className="flex flex-col">
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            autoComplete="family-name"
            required
            placeholder="Last name"
            className="w-full py-2 text-sm md:text-base text-black placeholder-black/30 bg-transparent border-0 border-b-1 border-black/30 focus:border-[#f37a35] dark:border-white/30 dark:text-white dark:placeholder-white/30 transition-all duration-300 focus:outline-none"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="flex flex-col">
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            autoComplete="email"
            required
            placeholder="Email address"
            className="w-full py-2 text-sm md:text-base text-black placeholder-black/30 bg-transparent border-0 border-b-1 border-black/30 focus:border-[#f37a35] dark:border-white/30 dark:text-white dark:placeholder-white/30 transition-all duration-300 focus:outline-none"
          />
        </div>

        <div className="flex flex-col">
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            autoComplete="tel"
            placeholder="Phone number"
            className="w-full py-2 text-sm md:text-base text-black placeholder-black/30 bg-transparent border-0 border-b-1 border-black/30 focus:border-[#f37a35] dark:border-white/30 dark:text-white dark:placeholder-white/30 transition-all duration-300 focus:outline-none"
          />
        </div>
      </div>

      <div className="flex flex-col">
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          placeholder="Message"
          className="w-full min-h-[120px] py-2 text-sm md:text-base text-black placeholder-black/30 bg-transparent border-0 border-b-1 border-black/30 focus:border-[#f37a35] dark:border-white/30 dark:text-white dark:placeholder-white/30 resize-y transition-all duration-300 focus:outline-none"
        />
      </div>

      <div className="flex items-center justify-between">
        <button
          type="submit"
          disabled={isLoading}
          onClick={handleSubmit}
          className={`relative overflow-hidden bg-[#f37a35] px-12 py-5 text-sm font-semibold rounded-full text-white md:text-md group transition-all duration-300 hover:scale-105 active:scale-95 ${
            isLoading ? "" : ""
          }`}
        >
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
          <span className="relative z-10">
            {isLoading ? "Submitting..." : "Submit"}
          </span>
        </button>

        {responseMessage.text && (
          <div
            className={`fixed inset-0 flex items-center justify-center z-50 bg-black/80 backdrop-blur-sm transition-all duration-300 ease-out ${
              isExiting ? "opacity-0" : "opacity-100"
            }`}
            style={{
              animation: isExiting ? "none" : "fadeIn 0.3s ease-out",
            }}
          >
            <div
              className={`max-w-md w-full mx-4 rounded-2xl overflow-hidden shadow-2xl bg-[#0A0A0A] transform transition-all duration-300 ease-out ${
                isExiting
                  ? "scale-90 opacity-0 -translate-y-4"
                  : "scale-100 opacity-100 translate-y-0"
              }`}
              style={{
                animationFillMode: "forwards",
                animation: isExiting ? "none" : "modalShow 0.3s ease-out",
              }}
            >
              <div className="relative bg-[#f37a35] py-6 px-6">
                <div className="flex justify-start items-center">
                  <div className="flex items-center space-x-3">
                    <div
                      className={`${
                        responseMessage.type === "success"
                          ? "bg-green-500"
                          : "bg-red-500"
                      } rounded-full w-10 h-10 flex items-center justify-center shadow-lg`}
                    >
                      {responseMessage.type === "success" ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      )}
                    </div>
                    <h2 className="text-xl font-bold text-white">
                      {responseMessage.type === "success"
                        ? "Message Sent!"
                        : "Error Occurred"}
                    </h2>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="px-6 py-8">
                <div className="text-center">
                  <p className="text-gray-300 text-base leading-relaxed">
                    {responseMessage.text}
                  </p>

                  {responseMessage.type === "success" && (
                    <div className="mt-6 flex items-center justify-center space-x-2 text-[#f37a35]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                      <span className="text-sm font-medium">
                        We'll get back to you soon!
                      </span>
                    </div>
                  )}
                </div>
              </div>

              <div className="h-1 bg-[#f37a35]"></div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        @keyframes modalShow {
          0% {
            opacity: 0;
            transform: scale(0.9) translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
