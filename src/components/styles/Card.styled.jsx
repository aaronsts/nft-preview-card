import styled from "styled-components";

export const StyledCard = styled.div`
  background: ${({ theme }) => theme.colors.secondary};

  max-width: 370px;

  margin: 0 40px;
  padding: 30px;

  border-radius: 15px;

  }

  h1 {
    color: white;
    font-size: 24px;

    padding: 20px 0;

    &:hover {
      color: ${({ theme }) => theme.colors.thirtiary};
      cursor: pointer;
    }
  }

  p {
    font-size: 18px;
    font-weight: 300;
    line-height: 1.4;
  }
`;
