import React, { useState }  from 'react';
import { useDispatch } from "react-redux";
import { Header } from '../../components/Header';
import { LoginForm } from '../../components/LoginForm';


export function LoginPage() {
  const initialState = {
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
      <LoginForm
        email={form.email}
        password={form.password}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </>
  );
}