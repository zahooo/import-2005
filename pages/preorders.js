import Layout from './components/Layout';
import * as S from '../src/styles/styles'
import partners from '../src/data';

const tableHeadings = [
  'Márka',
  'Időtartam',
  'Kollekció'
];

const PreOrders = () => (
  <Layout>
    <S.PreOrderTable>
      <caption>
        Aktuális előrendelésink:
      </caption>
      <thead>
        <S.PreOrderRow head>
          {tableHeadings.map(heading => 
            <S.HeaderCell key={heading}>{heading}</S.HeaderCell>
          )}
        </S.PreOrderRow>
      </thead>
      <tbody>
        {partners.map(partner => 
          <S.PreOrderRow key={partner.id}>
            <S.PreOrderCell>{partner.name}</S.PreOrderCell>
            <S.PreOrderCell>{partner.preOrderTime}</S.PreOrderCell>
            <S.PreOrderCell>2020-2021 tavaszi-nyári</S.PreOrderCell>
          </S.PreOrderRow>
        )}

      </tbody>
    </S.PreOrderTable>
  </Layout>
)

export default PreOrders;