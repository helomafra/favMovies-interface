import styled from "styled-components";

export const Container = styled.div`
  height: 56px;
  padding: 16px;

  background-color: ${({ theme, isNew }) =>
    isNew ? "transparent" : theme.COLORS.BACKGROUND_TAG};
  border: ${({ theme, isNew }) =>
    isNew
      ? `2px dashed ${theme.COLORS.EMPHASIS_LOW}`
      : `2px solid ${theme.COLORS.BACKGROUND_TAG}`};

  border-radius: 10px;

  input {
    width: 100px;
    background-color: transparent;
    border: none;
    color: ${({ theme }) => theme.COLORS.EMPHASIS_HIGHT};
  }
  button {
    background-color: transparent;
    border: none;
  }
  svg {
    color: ${({ theme }) => theme.COLORS.PRIMARY};
  }
`;
