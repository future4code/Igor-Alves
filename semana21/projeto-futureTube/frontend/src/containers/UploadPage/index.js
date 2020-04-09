import React, { useState }  from 'react';
import { useDispatch } from "react-redux";
import { Header } from '../../components/Header';
import { ContentDisplay } from '../../components/ContentDisplay';
import { SideMenu } from '../../components/SideMenu';
import { UploadForm } from '../../components/UploadForm';


export function UploadPage() {
  return(
    <>
      <Header menu/>
      <ContentDisplay>
        <SideMenu/>
        <UploadForm/>
      </ContentDisplay>
    </>
  );
}