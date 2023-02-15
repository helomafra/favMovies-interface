import { Container, Profile } from "./styles";
import { Input } from "../Input";

export function Header() {
  return (
    <Container>
      <h1>myMovies</h1>
      <Input placeholder="Pesquisar pelo título" />

      <Profile to="/profile">
        <div>
          <strong>Heloísa Mafra</strong>
          <span>sair</span>
        </div>

        <img src="https://github.com/helomafra.png" alt="Foto do usuário" />
      </Profile>
    </Container>
  );
}
