import styled, { createGlobalStyle, css } from "styled-components";

export const LoginBody = styled.body`
  height: 100vh;
  width: 100vw;
  background-image: ${(props) => props.theme.themes.dark_background};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px;
`;
export const LoginCard = styled.div`
  width: 500px;
  height: 704px;
  background-color: ${(props) => props.theme.colors.branco};
  border-radius: ${(props) => props.theme.border_radius};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  filter: drop-shadow(4px 4px 4px #161616);
  z-index: 1000;
  position: absolute;
  padding: 30px 25px;
`;

export const LoginCardTitle = styled.h1`
  font-weight: 400;
  font-size: 36px;
  font-style: normal;
  font-family: "Oswald", sans-serif;
`;

interface LoginCardInputInterface {
  imagem: string;
}

export const LoginCardInput = styled.input<LoginCardInputInterface>`
  width: 450px;
  height: 55px;
  border-radius: ${(props) => props.theme.border_radius};
  border: ${(props) => props.theme.input_boder};
  background-image: ${(props) => props.imagem};
  background-color: transparent;
  padding: 5px 25px;
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  &:focus {
    outline: none;
  }
`;

export const LoginCardLinkCadastroP = styled.p`
  font-size: 18px;
  font-family: "Poppins", sans-serif;
  color: ${(props) => props.theme.colors.preto};
  display: flex;
  width: 100%;
`;

export const LoginCardDividerP = styled.p`
  font-size: 18px;
  font-family: "Poppins", sans-serif;
  color: ${(props) => props.theme.colors.preto};
`;
export const LoginCardLinkCadastroSpan = styled.a`
  font-size: 18px;
  font-family: "Poppins", sans-serif;
  color: ${(props) => props.theme.colors.verde};
  margin-left: 4px;
  text-decoration: none;
`;

export const LoginCardButton = styled.button`
  width: 450px;
  height: 60px;
  border-radius: ${(props) => props.theme.border_radius};
  background-color: ${(props) => props.theme.colors.verde};
  color: ${(props) => props.theme.colors.preto};
  border: none;
  font-size: 24px;
  font-family: "Poppins", sans-serif;
  &:hover {
    cursor: pointer;
  }
`;

export const LoginCardlabel = styled.label`
  font-size: 24px;
  font-style: normal;
  font-family: "Poppins", sans-serif;
  width: 100%;
  margin-bottom: 10px;
`;

export const LoginCardInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const LoginCardFormContainer = styled.form`
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const LoginCardButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  height: 102px;
`;

export const LoginCardDivider = styled.div`
    width: 387px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
`;

export const LoginCardDividerLine = styled.div`
    height: 1px;
    width: 150px;
    background-color: ${props => props.theme.colors.cinza};
`;