import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    border_radius: string;
    input_boder: string;
    themes: {
      light_background: string;
      dark_background: string;
    };
    colors: {
      azul: string;
      verde: string;
      branco: string;
      cinza: string;
      preto: string;
      cinza_texto: string;
      vermelho: string;
    };
  }
}
