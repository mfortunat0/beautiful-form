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

import { FormEvent, useRef, useState } from "react";

const Form = () => {
  const inputEmailRef = useRef<HTMLInputElement>();
  const inputPasswordRef = useRef<HTMLInputElement>();
  const submitButtonRef = useRef<HTMLButtonElement>();
  const [emailState, setEmailState] = useState("invalid");
  const [passwordState, setPasswordState] = useState("invalid");
  const [buttonState, setButtonState] = useState("disabled");

  const validateEmail = () => {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const emailTest = regex.test(inputEmailRef.current.value);

    if (!emailTest) {
      setEmailState("error");
      setButtonState("disabled");
    } else {
      setEmailState("valid");
      setButtonState("gradient");
      submitButtonRef.current.textContent = "Login";
    }
  };

  const validadePassword = () => {
    if (inputPasswordRef.current.value.length < 8) {
      setPasswordState("error");
      setButtonState("disabled");
    } else {
      setPasswordState("valid");
      setButtonState("gradient");
      submitButtonRef.current.textContent = "Login";
    }
  };

  const errorHandler = () => {
    setButtonState("error");
    submitButtonRef.current.textContent = "Error :(";
  };

  const sucessHandler = () => {
    setButtonState("sucess");
    submitButtonRef.current.textContent = "Sent!! :)";
  };

  const submitHandleButton = (e: FormEvent) => {
    e.preventDefault();

    submitButtonRef.current.textContent = "...Loading";

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
        if (response.status !== 200) {
          errorHandler();
          console.log(response.status);
        } else {
          sucessHandler();
        }
      })
      .catch(() => {
        errorHandler();
      });
  };

  return (
    <LoginContainer>
      <LoginTitle>Login</LoginTitle>
      <LoginForm>
        <LoginInputEmail
          onInput={validateEmail}
          ref={inputEmailRef}
          placeholder="e-mail"
        />
        <LoginInputBorder state={emailState} />
        <LoginInputPassword
          onInput={validadePassword}
          ref={inputPasswordRef}
          placeholder="senha"
        />
        <LoginInputBorder state={passwordState} />
        <LoginSubmit
          ref={submitButtonRef}
          onClick={(e) => submitHandleButton(e)}
          state={buttonState}
        >
          Login
        </LoginSubmit>
        <LoginReset href="#">Esqueci a senha</LoginReset>
      </LoginForm>
    </LoginContainer>
  );
};

export default Form;
