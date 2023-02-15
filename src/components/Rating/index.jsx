import { AiOutlineStar } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";

import { Container } from "./styles";

export function Rating({ ratings }) {
  return (
    <Container>
      <span> {ratings >= 1 ? <AiFillStar /> : <AiOutlineStar />} </span>
      <span> {ratings >= 2 ? <AiFillStar /> : <AiOutlineStar />} </span>
      <span> {ratings >= 3 ? <AiFillStar /> : <AiOutlineStar />} </span>
      <span> {ratings >= 4 ? <AiFillStar /> : <AiOutlineStar />} </span>
      <span> {ratings >= 5 ? <AiFillStar /> : <AiOutlineStar />} </span>
    </Container>
  );
}
