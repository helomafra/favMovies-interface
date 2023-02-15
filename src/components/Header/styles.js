import styled from "styled-components";

import { Link } from "react-router-dom";

export const Container = styled.header`
  grid-area: header;

  height: 105px;
  width: 100%;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_TAG};

  display: flex;
  justify-content: center;
  gap: 64px;
  align-items: center;

  margin: 30px auto;
  padding: 0 30px;

  > h1 {
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    color: ${({ theme }) => theme.COLORS.PRIMARY};
  }
`;

export const Profile = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;

  min-width: 200px;

  gap: 12px;

  > img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.COLORS.EMPHASIS_LOW};
  }

  > div {
    display: flex;
    flex-direction: column;
    text-align: start;

    strong {
      font-size: 18px;
      color: ${({ theme }) => theme.COLORS.EMPHASIS_HIGHT};
    }

    span {
      text-align: end;
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.EMPHASIS_MEDIUM};
    }
  }
`;
