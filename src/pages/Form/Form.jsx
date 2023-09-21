import React, { useState } from "react";

const Form = () => {
  // Initialize state variables for each form field
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // Extract individual form field values from the formData object
  const { name, email, password } = formData;

  // Handle form input changes
  const handleChangeFormValue = (e) => {
    const { name, value } = e.target;

    console.log(name,value);

    // Update the corresponding field in the formData object
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform actions with the form data, e.g., send it to an API
    console.log(formData);
  };

  return (
    <form
      className="space-y-3 h-[70vh] flex flex-col justify-center items-center"
      onSubmit={handleSubmit}
    >
      <input
        className="outline-green-400 border border-green-600 block"
        onChange={handleChangeFormValue}
        type="text"
        name="name"
        value={name}
        placeholder="Name"
      />
      <input
        className="outline-green-400 border border-green-600 block"
        onChange={handleChangeFormValue}
        type="email"
        name="email"
        value={email}
        placeholder="Email"
      />
      <input
        className="outline-green-400 border border-green-600 block"
        onChange={handleChangeFormValue}
        type="password"
        name="password"
        value={password}
        placeholder="Password"
      />
      <button
        className="outline-green-400 border border-green-600 block px-5"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
