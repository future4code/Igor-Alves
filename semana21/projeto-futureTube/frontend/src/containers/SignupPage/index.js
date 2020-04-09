import React, { useState }  from 'react';
import { useDispatch } from "react-redux";
import { Header } from '../../components/Header';
import { SignupForm } from '../../components/SignupForm';


export function SignupPage() {
  const initialState = {
    name: '',
    email: '',
    password: '',
  }

  const [form, setForm] = useState(initialState)
  const dispatch = useDispatch()

  const handleChange = (event) => {
    const auxForm = { ...form };
    auxForm[event.target.name] = event.target.value;
    setForm(auxForm);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(form)
    setForm(initialState)
  };

  return(
    <>
      <Header/>
      <SignupForm
        email={form.email}
        password={form.password}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </>
  );
}