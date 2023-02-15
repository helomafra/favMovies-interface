import { Container, Section, NewMovieButton } from "./styles";

import { FiPlus } from "react-icons/fi";

import { Header } from "../../components/Header";
import { MovieCard } from "../../components/MovieCard";

export function Home() {
  return (
    <Container>
      <Header />

      <Section>
        <div className="new-movie">
          <h1>Meus filmes</h1>
          <NewMovieButton to="/new">
            <FiPlus />
            Adicionar Filme
          </NewMovieButton>
        </div>

        <main>
          <MovieCard
            data={{
              name: "Heloisa",
              id: 1,
              title: "Interestellar",
              ratings: 4,
              description:
                'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o "fantasma" é uma inteligência desconhecida que está enviando mensagens codificadas através de radiação gravitacional, deixando coordenadas em binário que os levam até uma instalação secreta da NASA liderada pelo professor John Brand. O cientista revela que um buraco de minhoca foi aberto perto de Saturno e que ele leva a planetas que podem oferecer condições de sobrevivência para a espécie humana.',
              tags: [
                { id: 1, name: "Drama" },
                { id: 2, name: "Romance" },
                { id: 2, name: "Família" },
              ],
            }}
          />

          <MovieCard
            data={{
              name: "Heloisa",
              id: 1,
              title: "Interestellar",
              ratings: 4,
              description:
                'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o "fantasma" é uma inteligência desconhecida que está enviando mensagens codificadas através de radiação gravitacional, deixando coordenadas em binário que os levam até uma instalação secreta da NASA liderada pelo professor John Brand. O cientista revela que um buraco de minhoca foi aberto perto de Saturno e que ele leva a planetas que podem oferecer condições de sobrevivência para a espécie humana.',
              tags: [
                { id: 1, name: "Drama" },
                { id: 2, name: "Romance" },
                { id: 2, name: "Família" },
              ],
            }}
          />

          <MovieCard
            data={{
              name: "Heloisa",
              id: 1,
              title: "Interestellar",
              ratings: 4,
              description:
                'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o "fantasma" é uma inteligência desconhecida que está enviando mensagens codificadas através de radiação gravitacional, deixando coordenadas em binário que os levam até uma instalação secreta da NASA liderada pelo professor John Brand. O cientista revela que um buraco de minhoca foi aberto perto de Saturno e que ele leva a planetas que podem oferecer condições de sobrevivência para a espécie humana.',
              tags: [
                { id: 1, name: "Drama" },
                { id: 2, name: "Romance" },
                { id: 2, name: "Família" },
              ],
            }}
          />

          <MovieCard
            data={{
              name: "Heloisa",
              id: 1,
              title: "Interestellar",
              ratings: 4,
              description:
                'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o "fantasma" é uma inteligência desconhecida que está enviando mensagens codificadas através de radiação gravitacional, deixando coordenadas em binário que os levam até uma instalação secreta da NASA liderada pelo professor John Brand. O cientista revela que um buraco de minhoca foi aberto perto de Saturno e que ele leva a planetas que podem oferecer condições de sobrevivência para a espécie humana.',
              tags: [
                { id: 1, name: "Drama" },
                { id: 2, name: "Romance" },
                { id: 2, name: "Família" },
              ],
            }}
          />
        </main>
      </Section>
    </Container>
  );
}
