import styled from "styled-components";

export const Container = styled.div`
  font-size: 14px;
  padding: 5px 14px;
  border-radius: 5px;
  margin-right: 6px;
  color: ${({ theme }) => theme.COLORS.EMPHASIS_HIGHT};
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_TAG};
`;
