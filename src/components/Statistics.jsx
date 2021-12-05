import { StyledStats } from "./styles/Statistics.styled";
import Creator from "./Creator";

import { FaEthereum } from "react-icons/fa";
import { AiFillClockCircle } from "react-icons/ai";

const Statistics = () => {
  return (
    <>
      <StyledStats>
        <div>
          <h2>
            <FaEthereum />
            0.041 ETH
          </h2>
          <p>
            <AiFillClockCircle /> 3 days left
          </p>
        </div>
        <hr />
      </StyledStats>
      <Creator />
    </>
  );
};

export default Statistics;
