import { StyledCard } from "./styles/Card.styled";
import Statistics from "./Statistics";
import Image from "./Image";

const Card = () => {
  return (
    <StyledCard>
      <Image />
      <h1>Equilibrium #3429</h1>
      <p>Our Equilibruim collection promotes balance and calm.</p>
      <Statistics />
    </StyledCard>
  );
};

export default Card;
