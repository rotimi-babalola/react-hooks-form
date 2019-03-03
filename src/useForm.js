import { useState } from 'react';

const useForm = callback => {
  const [values, setValues] = useState({});

  const handleSubmit = event => {
    if (event) {
      event.preventDefault();
      callback();
    }
  };

  const handleChange = event => {
    event.persist();
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  return {
    handleSubmit,
    handleChange,
    values,
  };
};

export default useForm;
