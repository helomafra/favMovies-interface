import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas:
    "header"
    "content";
`;

export const Section = styled.div`
  margin: 60px 330px;

  .new-movie {
    display: flex;
    justify-content: space-between;
    align-items: center;

    > h1 {
      font-weight: 400;
      font-size: 32px;
      line-height: 42px;
    }
  }

  main {
    grid-area: content;
    height: 720px;
    margin: 40px auto;

    display: flex;
    flex-direction: column;
    gap: 24px;

    padding-right: 8px;

    overflow: hidden;
    overflow-y: auto;

    ::-webkit-scrollbar-track {
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_MAIN};
    }
    ::-webkit-scrollbar {
      width: 8px;
      background: ${({ theme }) => theme.COLORS.DARK};
    }
    ::-webkit-scrollbar-thumb {
      border-radius: 8px;
      background: ${({ theme }) => theme.COLORS.PRIMARY};
    }
  }
`;

export const NewMovieButton = styled(Link)`
  height: 56px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  background-color: ${({ theme }) => theme.COLORS.PRIMARY};
  color: ${({ theme }) => theme.COLORS.DARK};

  font-size: 16px;
  font-weight: 400;

  border: none;
  border-radius: 8px;

  padding: 12px;
`;
