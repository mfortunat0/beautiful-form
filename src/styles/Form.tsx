import styled from "styled-components";

interface ILoginInput {
  type: string;
}

const LoginContainer = styled.div`
  min-height: 400px;
  width: 300px;
  background-color: ${(props) => props.theme.white};
  box-sizing: border-box;
  padding: 32px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LoginTitle = styled.h1`
  margin-bottom: 32px;
  color: ${(props) => props.theme.black};
`;

const LoginForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LoginInputEmail = styled.input.attrs<ILoginInput>({
  type: "email",
})`
  height: 40px;
  width: 100%;
  box-sizing: border-box;
  padding-left: 8px;
  border: unset;
  outline: none;
`;

const LoginInputPassword = styled.input.attrs<ILoginInput>({
  type: "password",
})`
  height: 40px;
  width: 100%;
  box-sizing: border-box;
  padding-left: 8px;
  border: unset;
  outline: none;
`;

const LoginInputBorder = styled.span`
  height: ${(props) => props.theme.borderHeight};
  width: 100%;
  margin-bottom: 16px;
  background-color: ${(props) => props.theme.lightGray};
  transition: 0.3s ease-in-out;
  &:after {
    content: "";
    display: block;
    height: ${(props) => props.theme.borderHeight};
    width: 0;
    margin-bottom: 16px;
    background: ${(props) => props.theme.linearGradient};
    transition: 0.3s ease-in-out;
    ${LoginInputEmail}:focus + & {
      width: 100%;
    }
    ${LoginInputPassword}:focus + & {
      width: 100%;
    }
  }
`;

const LoginSubmit = styled.button`
  height: 48px;
  width: 100%;
  outline: none;
  background: ${(props) => props.theme.buttonLinear};
  background-size: 200%;
  margin-bottom: 32px;
  color: ${(props) => props.theme.white};
  font-size: 16px;
  font-weight: bold;
  border: unset;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.5s ease-in-out;
  &:hover {
    background-position: right;
  }
`;

const LoginReset = styled.a`
  font-size: 12px;
  color: ${(props) => props.theme.gray};
  text-decoration: none;
`;

export {
  LoginContainer,
  LoginForm,
  LoginInputEmail,
  LoginInputPassword,
  LoginTitle,
  LoginReset,
  LoginSubmit,
  LoginInputBorder,
};
