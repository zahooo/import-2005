import Link from 'next/link';
import * as S from '../src/styles/styles';

const NavItem = ({ text, href, lang }) => (
  <S.NavItem >
    <Link href={{ pathname: href, query: { lang: lang } }} passHref >
      <S.NavLink>
        {text.toUpperCase()}
      </S.NavLink>
    </Link>
  </S.NavItem >
)

export default NavItem;