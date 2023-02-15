import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_HEADER};

  padding: 32px;

  border-radius: 16px;

  > .movie-info {
    display: flex;
    flex-direction: column;
    gap: 8px;

    p {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;

      font-size: 16px;
      line-height: 19px;

      color: ${({ theme }) => theme.COLORS.EMPHASIS_MEDIUM};
    }

    h3 {
      font-weight: 700;
      font-size: 24px;
      line-height: 32px;
    }
  }

  .tags {
    margin-top: 24px;
    display: flex;
    gap: 8px;
  }
`;
