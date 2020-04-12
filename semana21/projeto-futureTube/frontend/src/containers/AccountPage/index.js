import React, { useState }  from 'react';
import { useDispatch } from "react-redux";
import { Header } from '../../components/Header';
import { ContentDisplay } from '../../components/ContentDisplay';
import { SideMenu } from '../../components/SideMenu';
import { AccountForm } from '../../components/AccountForm';


export function AccountPage() {
  const initialState = {
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
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
      <Header menu/>
      <ContentDisplay>
        <SideMenu/>
        <AccountForm
          oldPassword={form.oldPassword}
          newPassword={form.newPassword}
          confirmPassword={form.confirmPassword}
          description={form.description}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
      </ContentDisplay>
    </>
  );
}