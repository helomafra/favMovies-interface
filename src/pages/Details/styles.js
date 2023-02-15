import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas:
    "header"
    "content";
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1240px;
  margin: 42px auto;

  display: flex;
  flex-direction: column;
  justify-content: center;

  .title {
    display: flex;
    align-items: center;
    gap: 20px;

    h1 {
      font-weight: 500;
      font-size: 36px;
      line-height: 47px;
    }
  }

  .author {
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 24px 0 48px;

    img {
      width: 16px;
      height: 16px;
      border-radius: 50%;
    }

    svg {
      color: ${({ theme }) => theme.COLORS.PRIMARY};
    }
  }

  .tags {
    display: flex;

    margin-bottom: 40px;
  }

  > p {
    text-align: justify;
  }
`;
