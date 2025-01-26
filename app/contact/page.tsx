"use client";

import { useState } from "react";
import axios from "axios";
import { title } from "@/components/primitives";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/sendMail`, formData);
      setResponseMessage(response.data.message);
    } catch (error: any) {
      setResponseMessage(
        error.response?.data?.message ||
          "Something went wrong. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-8">
      <h1 className="text-3xl font-bold text-center">
        <div className="inline-block max-w-xl text-center">
          <span className={title()}>Contact&nbsp;</span>
          <span className={title({ color: "yellow" })}>Me&nbsp;</span>
        </div>
      </h1>
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto mt-8 p-8">
        <div className="flex flex-wrap -mx-2">
          {/* Left Side Inputs */}
          <div className="w-full md:w-1/2 px-2 mb-4">
            <input
              type="text"
              id="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 bg-transparent rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
            <input
              type="email"
              id="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-4 p-3 border border-gray-300 bg-transparent rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
            <input
              type="text"
              id="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full mt-4 p-3 border border-gray-300 bg-transparent rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          {/* Right Side Textarea */}
          <div className="w-full md:w-1/2 px-2 mb-4">
            <textarea
              id="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full h-32 p-3 border border-gray-300 bg-transparent rounded-lg shadow-sm resize-none focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            ></textarea>
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="px-6 py-3 text-white bg-red-500 rounded-lg shadow-md cursor-pointer hover:bg-red-600 focus:ring-4 focus:ring-red-300 focus:outline-none"
            disabled={isLoading}
          >
            {isLoading ? "Sending..." : "Submit"}
          </button>
        </div>

        {responseMessage && (
          <p className="mt-4 text-center text-sm text-gray-600">
            {responseMessage}
          </p>
        )}
      </form>
    </section>
  );
};

export default ContactForm;
