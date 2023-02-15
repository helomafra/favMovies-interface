import { Container } from "./styles";
import { FiPlus, FiX } from "react-icons/fi";

export function MovieTag({ value, isNew, onClick }) {
  return (
    <Container isNew={isNew}>
      <input type="text" value={value} readOnly={!isNew} />

      <button onClick={onClick} type="button">
        {isNew ? <FiPlus /> : <FiX />}
      </button>
    </Container>
  );
}
