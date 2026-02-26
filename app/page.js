//Controlled component


"use client";
/*
import { useRef } from "react";

export default function UncontrolledExample() {
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${inputRef.current.value}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-96"
      >
        <input
          type="text"
          ref={inputRef}
          className="w-full p-2 border border-gray-300 rounded mb-4"
          placeholder="Enter your name"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
*/

//Controlled Component

import { useState } from "react";
/*
typescript- instead of using multiple usestatesuse this
interface FormData {
  email: string;
  password: string;
}

to validate inputs
interface FormErrors{
  email?: string;
  password?: string;
}
*/


export default function ControlledExample() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

 
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const errors = {};

    if (!formData.email.includes("@")) {
      errors.email = "Invalid email address";
    }

    if (formData.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    alert(
      `Name: ${formData.name}, Email: ${formData.email}, Password Saved`
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-96"
      >
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded mb-3"
          placeholder="Enter your name"
        />

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded mb-3"
          placeholder="Enter your email"
        />
        {formErrors.email && (
          <p className="text-red-500 text-sm mb-3">
            {formErrors.email}
          </p>
        )}

        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded mb-3"
          placeholder="Enter your password"
        />
        {formErrors.password && (
          <p className="text-red-500 text-sm mb-3">
            {formErrors.password}
          </p>
        )}

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
}