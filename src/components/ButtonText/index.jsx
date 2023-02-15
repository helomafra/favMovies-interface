import { Container } from "./styles";

import { FiArrowLeft } from "react-icons/fi";

export function ButtonText({ to }) {
  return (
    <Container type="button" to={to}>
      <FiArrowLeft />
      Voltar
    </Container>
  );
}
