import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 274px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_INPUT};
  color: ${({ theme }) => theme.COLORS.EMPHASIS_HIGHT};

  border: none;
  resize: none;

  margin-bottom: 8px;
  border-radius: 10px;
  padding: 16px;

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.EMPHASIS_LOW};
  }
`;
