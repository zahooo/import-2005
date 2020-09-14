

import GlobalStyles from '../src/styles/globalStyles';
import NavBar from './Navbar';
import * as S from '../src/styles/styles';

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