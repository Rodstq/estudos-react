import styles from "./MovieSection.module.css";
import FieldSet from "../Fieldset";
import InputText from "../InputTest";
import Button from "../Button";
import { FaSearch } from "react-icons/fa";
import MovieList from "../MovieList";
import useFetchMovies from "../../hooks/useFetchMovies";
import useFilterMovies from "../../hooks/useFilterMovies";

const MovieSection = () => {
  const { movies, error, isLoading } = useFetchMovies();
  const { searchTerm, handleSearch, setSearchTerm, filteredMovies } =
    useFilterMovies(movies);

  return (
    <main>
      <section className={styles.container}>
        <FieldSet variant="secondary">
          <InputText
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder="Buscar filmes..."
          />
          <Button variant="icon" onClick={handleSearch}>
            <FaSearch />
          </Button>
        </FieldSet>
        <h1 className={styles.titulo}></h1>
        {isLoading && <p>Carregando filmes.....</p>}
        {error && <p className={styles.error}>{error}</p>}
        <MovieList movies={filteredMovies} />
      </section>
    </main>
  );
};

export default MovieSection;
