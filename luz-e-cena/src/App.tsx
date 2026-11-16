import Banner from "./components/Banner";
import bannerPrincipal from "../public/Assets Luz e Cena/Imagens/Banner principal/Banner principal desktop.png"
import Link from "./components/Link";
import Header from "./components/Header";

function App() {

  return (
    <>
      <Header/>
      <Banner src={bannerPrincipal} alt="banner principal" />
      <Link href="/" target="_blank">Link</Link>
    </>
  )
}

export default App
