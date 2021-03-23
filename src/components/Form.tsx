import {
  LoginContainer,
  LoginInputPassword,
  LoginInputEmail,
  LoginForm,
  LoginInputBorder,
  LoginReset,
  LoginTitle,
  LoginSubmit,
} from "../styles/Form";

import { FormEvent, useRef } from "react";

const Form = () => {
  const inputEmailRef = useRef<HTMLInputElement>();
  const inputPasswordRef = useRef<HTMLInputElement>();

  const submitHandleButton = (e: FormEvent) => {
    e.preventDefault();

    fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        email: inputEmailRef.current.value,
        password: inputPasswordRef.current.value,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <LoginContainer>
      <LoginTitle>Login</LoginTitle>
      <LoginForm>
        <LoginInputEmail ref={inputEmailRef} placeholder="e-mail" />
        <LoginInputBorder />
        <LoginInputPassword ref={inputPasswordRef} placeholder="senha" />
        <LoginInputBorder />
        <LoginSubmit onClick={(e) => submitHandleButton(e)}>Login</LoginSubmit>
        <LoginReset href="#">Esqueci a senha</LoginReset>
      </LoginForm>
    </LoginContainer>
  );
};

export default Form;
