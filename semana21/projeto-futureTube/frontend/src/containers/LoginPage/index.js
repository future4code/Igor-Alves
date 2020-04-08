import React from 'react';
import { Header } from '../../components/Header';
import { FormCard } from '../../components/FormCard';
import { LoginForm } from '../../components/LoginForm';


export function LoginPage() {
  return(
    <>
      <Header/>
      <FormCard>
        <LoginForm/>
      </FormCard>
    </>
  );
}