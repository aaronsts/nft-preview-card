import styled from "styled-components";

export const StyledStats = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 20px;

  div {
    display: flex;
    justify-content: space-between;
  }

  hr {
    color: ${({ theme }) => theme.colors.primary};
    border: 0.5px solid;
    opacity: 0.3;

    margin: 20px 0;
  }

  h2 {
    display: flex;
    align-items: center;
    font-size: 18px;
    color: ${({ theme }) => theme.colors.thirtiary};
  }

  p {
    display: flex;
    align-items: center;
    font-size: 18px;
  }

  svg {
    width: 20px;
    height: 20px;
    padding-right: 5px;
  }
`;
