import styled from "styled-components";

export const StyledCreator = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  img {
    margin-right: 20px;
    width: 40px;
    border-radius: 50%;
    border: 1px solid white;
  }

  span {
    color: white;
    &:hover {
      color: ${({ theme }) => theme.colors.thirtiary};
      cursor: pointer;
    }
  }
`;
