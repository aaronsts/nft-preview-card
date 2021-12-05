import styled from "styled-components";

export const StyledImage = styled.div`
  width: 310px;
  height: 310px;

  display: flex;
  justify-content: center;
  align-items: center;

  background: url("./images/image-equilibrium.jpg");
  background-size: cover;

  border-radius: 10px;

  span {
    color: white;
    font-size: 36px;
    display: none;
  }

  &:hover {
    background: linear-gradient(
        rgba(24, 211, 217, 0.6),
        rgba(24, 211, 217, 0.6)
      ),
      url("./images/image-equilibrium.jpg");
    background-size: cover;
    cursor: pointer;

    span {
      display: block;
    }
  }
`;
