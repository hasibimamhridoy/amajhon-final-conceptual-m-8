import React from "react";
import useHookForm from "../../hooks/useHookForm";

const HookForm = () => {
  const { formData, handleChangeFormValue } = useHookForm();

  const { name, email, password } = formData;

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
  };

  return (
    <div>
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
    </div>
  );
};

export default HookForm;
