import {
  LoginContainer,
  LoginInput,
  LoginForm,
  LoginInputBorder,
  LoginReset,
  LoginTitle,
  LoginSubmit,
} from "../styles/Form";

const Form = () => {
  return (
    <LoginContainer>
      <LoginTitle>Login</LoginTitle>
      <LoginForm>
        <LoginInput placeholder="e-mail" type="email" />
        <LoginInputBorder />
        <LoginInput placeholder="senha" type="password" />
        <LoginInputBorder />
        <LoginSubmit>Login</LoginSubmit>
        <LoginReset href="#">Esqueci a senha</LoginReset>
      </LoginForm>
    </LoginContainer>
  );
};

export default Form;
