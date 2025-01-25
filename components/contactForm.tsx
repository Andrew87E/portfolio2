// components/ContactForm.tsx
import Image from "next/image";
import React, { useState, FormEvent } from "react";

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    // Implement form submission logic here
    // console.log(formData);
  };

  return (
    <div className="flex flex-col md:flex-row bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
      <div className="bg-gray-100 dark:bg-gray-700 flex justify-center items-center md:w-1/2">
        <Image
          src="/images/contact.png"
          alt="Contact Illustration"
          className="max-w-full h-auto"
          style={{ maxWidth: "500px" }}
        />
      </div>
      <div className="w-full md:w-1/2 p-5 md:p-10">
        <h2 className="text-2xl font-semibold mb-5 text-gray-800 dark:text-white">
          Get in Touch
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label
              htmlFor="name"
              className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="message"
              className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              required
              rows={4}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline dark:bg-blue-600 dark:hover:bg-blue-800"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};
