

import GlobalStyles from './styles/globalStyles';
import NavBar from './Navbar';
import * as S from './styles/styles';

const Layout = ({ children }) => (
  <div>
    <GlobalStyles />
    <NavBar lang={'hu'} />
    <S.Content>
      {children}
    </S.Content>
  </div>
)

export default Layout;