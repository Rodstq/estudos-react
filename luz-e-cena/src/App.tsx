import Banner from "./components/Banner";
import bannerPrincipal from "../public/Assets Luz e Cena/Imagens/Banner principal/Banner principal desktop.png";
import Header from "./components/Header";
import MovieSection from "./components/MovieSection";

function App() {
  return (
    <>
      <Header />
      <Banner src={bannerPrincipal} alt="banner principal" />
      <MovieSection />
    </>
  );
}

export default App;
