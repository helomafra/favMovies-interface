import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 800px;

  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_INPUT};

  border-radius: 10px;
  margin-bottom: 8px;

  > input {
    height: 50px;
    width: 100%;

    padding: 19px;

    background: transparent;
    border: 0;

    color: ${({ theme }) => theme.COLORS.EMPHASIS_HIGHT};

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.EMPHASIS_LOW};
    }
  }
  > svg {
    margin-left: 16px;
    color: ${({ theme }) => theme.COLORS.EMPHASIS_LOW};
  }
`;
