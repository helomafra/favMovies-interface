import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 5px;
  span {
    color: ${({ theme }) => theme.COLORS.PRIMARY};
    padding: 0;
    margin: 0;
    max-height: 18px;
  }
`;
