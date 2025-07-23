"use client";

import { useState } from "react";

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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setResponseMessage({ type: "", text: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
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
    } catch (error) {
      setResponseMessage({
        type: "error",
        text: "An error occurred. Please try again.",
      });
    } finally {
      setIsLoading(false);
      setTimeout(() => {
        setResponseMessage({ type: "", text: "" });
      }, 5000);
    }
  };

  return (
    <div className="flex flex-col space-y-4">
      <div className="grid grid-cols-2 gap-6">
        <div className="flex flex-col">
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            placeholder="First name"
            className="w-full py-2 bg-transparent border-0 border-b-1 border-black/30 dark:border-white/30 text-sm md:text-base text-black dark:text-white placeholder-black/30 dark:placeholder-white/30 focus:outline-none focus:border-[#f37a35] transition-all duration-300"
          />
        </div>

        <div className="flex flex-col">
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            placeholder="Last name"
            className="w-full py-2 bg-transparent border-0 border-b-1 border-black/30 dark:border-white/30 text-sm md:text-base text-black dark:text-white placeholder-black/30 dark:placeholder-white/30 focus:outline-none focus:border-[#f37a35] transition-all duration-300"
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
            required
            placeholder="Email address"
            className="w-full py-2 bg-transparent border-0 border-b-1 border-black/30 dark:border-white/30 text-sm md:text-base text-black dark:text-white placeholder-black/30 dark:placeholder-white/30 focus:outline-none focus:border-[#f37a35] transition-all duration-300"
          />
        </div>
        <div className="flex flex-col">
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="Phone number"
            className="w-full py-2 bg-transparent border-0 border-b-1 border-black/30 dark:border-white/30 text-sm md:text-base text-black dark:text-white placeholder-black/30 dark:placeholder-white/30 focus:outline-none focus:border-[#f37a35] transition-all duration-300"
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
          className="w-full py-2 bg-transparent border-0 border-b-1 border-black/30 dark:border-white/30 text-sm md:text-base text-black dark:text-white placeholder-black/30 dark:placeholder-white/30 resize-y min-h-[120px] focus:outline-none focus:border-[#f37a35] transition-all duration-300"
        />
      </div>

      <div className="flex justify-between items-center">
        <button
          type="submit"
          onClick={handleSubmit}
          className={`px-6 py-4 bg-transparent border-2 text-sm md:text-base border-[#f37a35] text-[#f37a35] font-semibold rounded-4xl transition-all duration-300 ${
            isLoading
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-[#f37a35] hover:text-white hover:shadow-lg hover:shadow-red-500/30 hover:scale-105"
          }`}
          disabled={isLoading}
        >
          {isLoading ? "Submitting..." : "Submit"}
        </button>
        {responseMessage.text && (
          <div
            className={`text-sm md:text-base ${
              responseMessage.type === "success" ? "" : ""
            }`}
          >
            {responseMessage.text}
          </div>
        )}
      </div>
    </div>
  );
}
