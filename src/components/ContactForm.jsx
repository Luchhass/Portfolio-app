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

  useEffect(() => {
    if (responseMessage.text) {
      const timer = setTimeout(
        () => setResponseMessage({ type: "", text: "" }),
        5000
      );
      return () => clearTimeout(timer);
    }
  }, [responseMessage.text]);

  const messageText = useMemo(
    () => responseMessage.text,
    [responseMessage.text]
  );

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
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
          className={`px-6 py-4 text-sm md:text-base font-semibold text-[#f37a35] border-2 border-[#f37a35] bg-transparent rounded-4xl transition-all duration-300 ${
            isLoading
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-[#f37a35] hover:text-white hover:shadow-lg hover:shadow-red-500/30 hover:scale-105"
          }`}
        >
          {isLoading ? "Submitting..." : "Submit"}
        </button>
        {messageText && (
          <div
            className={`text-sm md:text-base ${
              responseMessage.type === "success" ? "" : ""
            }`}
          >
            {messageText}
          </div>
        )}
      </div>
    </form>
  );
}
