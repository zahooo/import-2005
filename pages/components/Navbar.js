import NavItem from './NavItem';
import * as S from './styles/styles';
import { useRouter } from 'next/router';

const navBarTexts = {
  about: 'Rólunk',
  preorders: 'Előrendelések',
  showroom: 'Bemutatóterem',
  partners: 'Partnereink',
  contact: 'Kapcsolat'
}

const NavBar = () => {
  const router = useRouter();
  const lang = router.query.lang;
  return (
    <S.Navbar>
      <S.CompanyLogo src='/logo_cut.png' />
      {Object.keys(navBarTexts).map(text => {
        return <NavItem text={navBarTexts[text]}
          href={text}
          key={text}
          lang='hu' />
      })}
    </S.Navbar>
  )
};

export default NavBar;