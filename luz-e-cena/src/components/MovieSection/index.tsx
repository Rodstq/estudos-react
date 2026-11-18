import styles from "./MovieSection.module.css";
import FieldSet from "../Fieldset";
import InputText from "../InputTest";
import Button from "../Button";
import { FaSearch } from "react-icons/fa";
import MovieList from "../MovieList";
import type { Movie } from "../../types";

const MovieSection = () => {
  return (
    <main>
      <section className={styles.container}>
        <FieldSet variant="secondary">
          <InputText placeholder="Buscar filmes..." />
          <Button variant="icon">
            <FaSearch />
          </Button>
        </FieldSet>
        <h1 className={styles.titulo}></h1>
        <MovieList movies={movies} />
      </section>
    </main>
  );
};

export default MovieSection;
