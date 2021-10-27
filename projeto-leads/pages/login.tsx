import Head from "next/head";
import Image from "next/image";
import React, { Children } from "react";
import {
  LoginBody,
  LoginCard,
  LoginCardButton,
  LoginCardButtonContainer,
  LoginCardDivider,
  LoginCardDividerLine,
  LoginCardDividerP,
  LoginCardFormContainer,
  LoginCardInput,
  LoginCardInputContainer,
  LoginCardlabel,
  LoginCardLinkCadastroP,
  LoginCardLinkCadastroSpan,
  LoginCardTitle,
} from "./components/login/_login_styles";
import email_icon from "../assets/icons/email_black_24dp.png";
import senha_icon from "../assets/icons/lock_black_24dp.png";
import ilustracao_login from "../assets/images/login_ilustracao.png";
import autenticacao_image from "../assets/images/logoMicrosoft.png";

const Login: React.FC = () => {
  return (
    <div>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald&family=Poppins:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <LoginBody>
        <Image src={ilustracao_login} objectFit="fill" />
        <LoginCard>
          <LoginCardTitle>Seja bem-vindo</LoginCardTitle>
          <LoginCardFormContainer>
            <LoginCardInputContainer>
              <LoginCardlabel>E-mail</LoginCardlabel>
              <LoginCardInput
                placeholder="Digite seu melhor e-mail"
                imagem={"../assets/icons/email_black_24dp.png"}
              ></LoginCardInput>
            </LoginCardInputContainer>
            <LoginCardInputContainer>
              <LoginCardlabel>Senha</LoginCardlabel>
              <LoginCardInput
                placeholder="Informe sua senha"
                imagem={"../assets/icons/lock_black_24dp.png"}
              ></LoginCardInput>
            </LoginCardInputContainer>
            <LoginCardButtonContainer>
              <LoginCardButton>Entrar</LoginCardButton>
              <LoginCardLinkCadastroP>
                Não possui conta?
                <LoginCardLinkCadastroSpan href="#">
                  Cadastre-se
                </LoginCardLinkCadastroSpan>
              </LoginCardLinkCadastroP>
            </LoginCardButtonContainer>
          </LoginCardFormContainer>
          <LoginCardDivider>
            <LoginCardDividerLine></LoginCardDividerLine>
            <LoginCardDividerP>ou</LoginCardDividerP>
            <LoginCardDividerLine></LoginCardDividerLine>
          </LoginCardDivider>
          <Image src={autenticacao_image}/>
        </LoginCard>
      </LoginBody>
    </div>
  );
};

export default Login;
