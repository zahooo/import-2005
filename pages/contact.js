import Layout from './components/Layout';
import * as S from '../src/styles/styles';

const Contact = () => (
  <Layout>
    <S.ContactsContainer>
      <S.Contact>
        <S.ContactImage src='rozsa.jpg' />
        <h1>Záhorszky Rózsa</h1>
        <p>&#x260E;: +36-30-648-9581</p>
        <p>&#x2709;: <S.NavLink href="mailto:rozsa.zahorszky@import2005.hu">rozsa.zahorszky@import2005.hu</S.NavLink></p>
      </S.Contact>
      <S.Contact>
        <S.ContactImage src='gyula.jpg' />
        <h1>Záhorszky Gyula</h1>
        <p>&#x260E;: +36-30-494-1188</p>
        <p>&#x2709;: <S.NavLink href="mailto:gyula.zahorszky@import2005.hu">gyula.zahorszky@import2005.hu</S.NavLink></p>
      </S.Contact>
    </S.ContactsContainer>
    <S.CompanyDataContainer>
      <details>
        <summary>Hivatalos cégadatok</summary>
        <ul>
          <li>Teljes cégnév: IMPORT 2005 Kereskedelmi és Szolgáltató Bt.</li>
          <li>Székhely: 1065 Budapest, Hajós u. 16-18.</li>
          <li>&#x260E;: +36-1-332-8250</li>
          <li>&#x2709;: import2005@import2005.hu</li>
          <li>Adószám: 22255277-2-42</li>
          <li>Közösségi adószám: HU-22255277</li>
          <li>Cégjegyzékszám: Cg. 01-06-722753</li>
          <li>Tárhely szolgáltatója: Magyar Telekom Zrt.</li>
        </ul>
      </details>
    </S.CompanyDataContainer>
  </Layout>
)

export default Contact;