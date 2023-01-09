import React from "react";
import styled from "styled-components";
import Whatsapp from "../assets/images/whatsapp.png";

const Login = () => {
  return (
    <Container>
      <Image />
      <LoginButton>Login Google</LoginButton>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img.attrs((props) => ({
  src: "https://cdn-icons-png.flaticon.com/512/733/733585.png?w=740&t=st=1673274995~exp=1673275595~hmac=ea5b3e9acfa1370108eeac250e7335a4e6752da402e37c4ae6f14d2a28278ed0",
}))`
  width: 160px;
  height: 160px;
`;

const LoginButton = styled.button.attrs((props) => ({
  onclick: props?.onclick,
}))`
  width: 250px;
  height: 50px;
  background-color: #25d366;
  border: none;
  margin-top: 40px;
  cursor: pointer;
  transition: all 0.25s;
  border-radius: 10px;
  font-size: 20px;
  font-weight: bold;

  :hover {
    background-color: #05f76e;
  }
`;
