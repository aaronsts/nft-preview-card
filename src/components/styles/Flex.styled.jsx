import styled from "styled-components";

export const Flex = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  & > div,
  & > ul {
    flex: 1;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    text-align: center;
  } ;
`;
