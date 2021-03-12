import styled from "styled-components";

const LoginContainer = styled.div`
  min-height: 400px;
  width: 300px;
  background-color: #fff;
  box-sizing: border-box;
  padding: 32px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const LoginTitle = styled.h1`
  margin-bottom: 32px;
  color: #303030;
`;
const LoginForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const LoginInput = styled.input.attrs({ type: `${(props) => props.type}` })`
  height: 40px;
  width: 100%;
  box-sizing: border-box;
  padding-left: 8px;
  border: unset;
  outline: none;
`;
const LoginInputBorder = styled.span`
  height: 1px;
  width: 100%;
  margin-bottom: 16px;
  background-color: #cfcfcf;
  transition: 0.3s ease-in-out;
  &after {
    content: "";
    display: block;
    height: 1px;
    width: 0;
    margin-bottom: 16px;
    background: linear-gradient(120deg, #e75590, #00c2cb);
    transition: 0.3s ease-in-out;
  }
`;
const LoginSubmit = styled.button`
  height: 48px;
  width: 100%;
  outline: none;
  background: linear-gradient(120deg, #e75590, #00c2cb, #e75590);
  background-size: 200%;
  margin-bottom: 32px;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  border: unset;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.5s ease-in-out;
`;
const LoginReset = styled.a`
  font-size: 12px;
  color: #929292;
  text-decoration: none;
`;

export {
  LoginContainer,
  LoginForm,
  LoginInput,
  LoginTitle,
  LoginReset,
  LoginSubmit,
  LoginInputBorder,
};
