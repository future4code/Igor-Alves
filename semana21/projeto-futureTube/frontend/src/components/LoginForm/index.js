import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import styled from 'styled-components';
import TextField from "@material-ui/core/TextField";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

const Input = styled.input`
  width: 95%; 
  display: 'inline';
  height: 3em;
  border-radius: 4px;
  border: 1px solid rgba(230,230,230, 1);
  text-indent: 0.5em;
  ::placeholder{
    color: black;
  }
`

export function LoginForm() {
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
    <form onClick={handleSubmit}>
      <TextField
        onChange={handleChange}
        name="email"
        type="email"
        label="E-mail"
        value={form.email}
        required="true"
        placeholder="email@email.com"
        InputLabelProps={{
            shrink: true,
        }}
        variant="outlined"
        margin="dense"
        fullWidth="true"
      />
      {/* <TextField
        name="password"
        variant="outlined"
        type={this.state.form.showPassword ? 'text' : 'password'}
        label="Senha"
        value={password}
        onChange={this.handleFieldChange}
        placeholder="Mínimo 6 caracteres"
        pattern=".{6,}"
        required="true"
        margin="normal"
        InputLabelProps={{
            shrink: true,
        }}
        InputProps={{
            endAdornment: (
                <InputAdornment position="end">
                    <IconButton
                    aria-label="Toggle password visibility"
                    onClick={this.onClickShowPassword}
                    >
                        {this.state.form.showPassword ? <Visibility />  : <VisibilityOff/>}
                    </IconButton>
                </InputAdornment>
            ),
        }} 
      /> */}
      {/* <StyledButton type="submit" variant="contained" color="primary">Entrar</StyledButton> */}
    </form>
  );
}