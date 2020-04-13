import React, { useState }  from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Header } from '../../components/Header';
import { ContentDisplay } from '../../components/ContentDisplay';
import { SideMenu } from '../../components/SideMenu';
import { UploadForm } from '../../components/UploadForm';


export function UploadPage() {
  const initialState = {
    video: '',
    thumbnail: '',
    title: '',
    description: '',
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
        { visibleMenu ? <SideMenu/> : null }
        <UploadForm
          video={form.video}
          thumbnail={form.thumbnail}
          title={form.title}
          description={form.description}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
      </ContentDisplay>
    </>
  );
}