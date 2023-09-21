import React, { useState } from "react";

const useHookForm = (initialState = "") => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
      });

  const handleChangeFormValue = (e)=>{

    const {name,value} = e.target
 
    setFormData({
        ...formData,
        [name] : value
    })
  }

  return {
    formData,handleChangeFormValue
  }
};

export default useHookForm;
