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
} from "./style";

function App() {
  return (
    <AppContainer>
      <ParentContainer>
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
