import { Link } from "react-router-dom";

import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/TextArea";
import { MovieTag } from "../../components/MovieTag";
import { Button } from "../../components/Button";

import { Container, Form } from "./styles";

export function New() {
  return (
    <Container>
      <Header />
      <main>
        <Form>
          <header>
            <ButtonText to="/" />
            <h1>Novo filme</h1>
          </header>

          <div className="input">
            <Input placeholder="Título" />
            <Input placeholder="Sua nota (de 0 a 5)" />
          </div>

          <Textarea placeholder="Observações" />

          <h2>Marcadores</h2>

          <div className="tags">
            <MovieTag value="Romance" isNew={false} />
            <MovieTag value="Nova nota" isNew={true} />
          </div>

          <div className="buttons">
            <Button title="Excluir filme" reverse></Button>
            <Button title="Salvar alterações"></Button>
          </div>
        </Form>
      </main>
    </Container>
  );
}
