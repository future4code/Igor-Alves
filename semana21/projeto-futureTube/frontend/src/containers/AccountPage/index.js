import React, { useState }  from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Header } from '../../components/Header';
import { ContentDisplay } from '../../components/ContentDisplay';
import { SideMenu } from '../../components/SideMenu';
import { AccountForm } from '../../components/AccountForm';
import { setMenuVisible } from "../../actions/user";


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

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(form)
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