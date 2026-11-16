import HeaderLinks from './components/HeaderLinks'
import HeaderList from './components/headerList'
import HeaderListItem from './components/HeaderListItem'
import Logo from '../Logo'
import HeaderActions from './components/HeaderActions'

import logo from '../../../public/Assets Luz e Cena/Logo e Favicon/Logo azul.png'
import HeaderFormFilters from './components/HeaderFormFilters'

const Header = () => {
  return (
    <header>
      <HeaderList>

        <HeaderListItem>
          <Logo src={logo}/>
        </HeaderListItem>

        <HeaderListItem>
          <HeaderLinks/>
        </HeaderListItem>

        <HeaderListItem>
          <HeaderFormFilters />
        </HeaderListItem>

        <HeaderListItem>
          <HeaderActions />
        </HeaderListItem>

      </HeaderList>
    </header>
  )
}

export default Header