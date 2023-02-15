import styled from "styled-components";
import backgroundImg from "../../assets/background.svg";

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Form = styled.form`
  padding: 0 136px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;

  > h1 {
    font-weight: 700;
    font-size: 48px;
    line-height: 63px;
    align-self: start;

    color: ${({ theme }) => theme.COLORS.PRIMARY};
  }

  > p {
    margin-top: 10px;

    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  > h2 {
    font-size: 24px;
    margin: 48px 0;

    align-self: start;
  }

  > a {
    font-size: 16px;
    line-height: 21px;

    margin-top: 124px;
    color: ${({ theme }) => theme.COLORS.PRIMARY};

    display: flex;
    align-items: center;
    gap: 8px;
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
`;
