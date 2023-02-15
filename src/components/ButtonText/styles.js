import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled(Link)`
  background: none;

  border: none;

  color: ${({ theme }) => theme.COLORS.PRIMARY};
  font-size: 16px;
  line-height: 21px;

  display: flex;
  gap: 10px;
  align-items: center;

  margin-bottom: 24px;
`;
