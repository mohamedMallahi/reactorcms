import React, { useState, useEffect } from 'react';

const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);
  const changeHandler = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const clearFields = () => {
    setValues(initialValues);
  };
  return [values, changeHandler, clearFields];
};
export default useForm;
