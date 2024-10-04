import { Footer } from "./components/Footer";
import {
  AppContainer,
  ParagraphNewsletter,
  TitleNewsletter,
  Newsletter,
  BoxNewsletter,
  ParentContainer,
  FormContent,
  InputEmail,
  ButtonSubscribe,
  TitlePrimaryContainer,
  TextBodyPrimaryContainer,
} from "./style";

function App() {
  return (
    <AppContainer>
      <ParentContainer>
        <TitlePrimaryContainer>Engenharia de Computação</TitlePrimaryContainer>

        <TextBodyPrimaryContainer>
          O curso tem como objetivo proporcionar aos acadêmicos conhecimentos
          técnicos e científicos nas áreas que integram hardware e software.
          Adquira conhecimento nas áreas de Inteligência Artificial, Internet
          das Coisas (IoT), Segurança da Informação e Análise de Sistemas.
        </TextBodyPrimaryContainer>

        <BoxNewsletter>
          <Newsletter>
            <TitleNewsletter>
              Fique por dentro de todas as novidades
            </TitleNewsletter>
            <ParagraphNewsletter>
              Se inscreva em nossa newsletter e receba nossos novos projetos
              publicados diretamente no seu e-mail!
            </ParagraphNewsletter>
            <FormContent>
              <InputEmail type="email" placeholder="Seu e-mail" />
              <ButtonSubscribe as="button" type="submit">
                Inscrever-se
              </ButtonSubscribe>
            </FormContent>
          </Newsletter>
        </BoxNewsletter>
      </ParentContainer>
      <Footer />
    </AppContainer>
  );
}

export default App;
