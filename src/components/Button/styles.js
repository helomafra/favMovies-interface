import styled from "styled-components";

export const Container = styled.button`
  width: 100%;

  background-color: ${({ theme, reverse }) =>
    reverse ? theme.COLORS.DARK : theme.COLORS.PRIMARY};

  color: ${({ theme, reverse }) =>
    reverse ? theme.COLORS.PRIMARY : theme.COLORS.BACKGROUND_MAIN};

  height: 56px;
  border: 0;
  padding: 0 16px;
  margin-top: 16px;
  border-radius: 10px;
  font-weight: 500;

  &:disabled {
    opacity: 0.5;
  }

  .delete {
    color: ${({ theme }) => theme.COLORS.PRIMARY};
    background-color: ${({ theme }) => theme.COLORS.DARK};
  }
`;
