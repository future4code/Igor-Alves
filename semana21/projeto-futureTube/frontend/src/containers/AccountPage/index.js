import React, { useState }  from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Header } from '../../components/Header';
import { ContentDisplay } from '../../components/ContentDisplay';
import { SideMenu } from '../../components/SideMenu';
import { AccountForm } from '../../components/AccountForm';
import { changePassword } from "../../actions/user";


export function AccountPage() {
  const initialState = {
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  }

  const dispatch = useDispatch()
  const [form, setForm] = useState(initialState)
  const visibleMenu = useSelector(state => state.user.visibleMenu)

  const handleChange = (event) => {
    const auxForm = { ...form };
    auxForm[event.target.name] = event.target.value;
    setForm(auxForm);
  };

  const confirmNewPassword = (form) => {
    if(form.newPassword !== form.confirmPassword) {
      window.alert("A senha nova deve bater com a confirmação");
      return false
    }
    return true
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if(confirmNewPassword(form)) {
      dispatch(changePassword(form))
    }
    setForm(initialState)
  };

  return(
    <>
      <Header menu/>
      <ContentDisplay>
        {visibleMenu ? <SideMenu/> : null}
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