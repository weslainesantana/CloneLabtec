import {
  FooterContainer,
  FooterImgContet,
  FooterLink,
  FooterLogos,
  FooterLogosMenores,
  FooterText,
  FooterTextContet,
} from "./style";

import Labtec from "../../assets/logo-labtec-Dta_fQe_.svg";
import Unisatc from "../../assets/logo-satc.svg";
import Software from "../../assets/logo-engenharia-de-software.svg";
import Computacao from "../../assets/logo-engenharia-computacao.svg";

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterImgContet>
        <div>
          <FooterLink href="https://labtec.satc.edu.br/">
            <FooterLogosMenores src={Labtec} alt="" />
          </FooterLink>
          <FooterLink href="https://unisatc.com.br/pagina-inicial/?utm_source=pagina-inicial-satc-educacao&utm_medium=site&utm_campaign=satc-educacao">
            <FooterLogosMenores src={Unisatc} alt="" />
          </FooterLink>
          <FooterLink href="https://unisatc.com.br/graduacao/engenharia-de-software/">
            <FooterLogos src={Software} alt="" />
          </FooterLink>
          <FooterLink href="https://unisatc.com.br/graduacao/engenharia-de-computacao/">
            <FooterLogos src={Computacao} alt="" />
          </FooterLink>
        </div>
      </FooterImgContet>
      <FooterTextContet>
        <FooterText>Desenvolvido por Labtec - SATC - 2024</FooterText>
      </FooterTextContet>
    </FooterContainer>
  );
};
