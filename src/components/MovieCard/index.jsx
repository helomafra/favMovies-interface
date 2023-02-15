import { Container } from "./styles";

import { Rating } from "../Rating";
import { Tag } from "../Tag";

export function MovieCard({ data, ...rest }) {
  return (
    <Container data={data} {...rest}>
      <div className="movie-info">
        <h3>{data.title}</h3>
        <Rating ratings={data.ratings} />

        <p>{data.description}</p>
      </div>

      <div className="tags">
        {data.tags &&
          data.tags.map((tag) => <Tag key={tag.id} title={tag.name} />)}
      </div>
    </Container>
  );
}
