import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas:
    "header"
    "content";

  > main {
    grid-area: content;
    overflow-y: auto;
  }
`;

export const Form = styled.form`
  max-width: 1240px;
  margin: 70px auto;

  > header {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    margin-bottom: 36px;
  }

  .input {
    display: flex;
    gap: 40px;

    margin-block: 40px;
  }

  h2 {
    font-size: 20px;
    line-height: 26px;
    font-weight: 400;

    margin-block: 24px;

    color: ${({ theme }) => theme.COLORS.EMPHASIS_MEDIUM};
  }

  .tags {
    display: flex;
    gap: 24px;

    padding: 16px;
    border-radius: 8px;

    background-color: ${({ theme }) => theme.COLORS.DARK};
  }

  .buttons {
    display: flex;
    gap: 40px;

    margin-block: 40px;
  }
`;
