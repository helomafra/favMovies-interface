import { Container } from "./styles";

export function Button({ title, reverse }) {
  return (
    <Container type="button" reverse={reverse}>
      {title}
    </Container>
  );
}
