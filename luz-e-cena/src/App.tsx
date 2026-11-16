import Banner from "./components/Banner";
import bannerPrincipal from "../public/Assets Luz e Cena/Imagens/Banner principal/Banner principal desktop.png"
import Link from "./components/Link";

function App() {

  return (
    <>
      <Banner src={bannerPrincipal} alt="banner principal" />
      <Link href="/" target="_blank">Link</Link>
    </>
  )
}

export default App
