import React, { useState }  from 'react';
import { useDispatch } from "react-redux";
import { Header } from '../../components/Header';
import { SignupForm } from '../../components/SignupForm';
import { userSignup } from '../../actions/user'


export function SignupPage() {
  const initialState = {
    name: '',
    email: '',
    password: '',
    birthDate: '',
    picture: ''
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
    dispatch(userSignup(form))
    setForm(initialState)
  };

  return(
    <>
      <Header/>
      <SignupForm
        name={form.name}
        email={form.email}
        password={form.password}
        birthDate={form.birthDate}
        picture={form.picture}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </>
  );
}