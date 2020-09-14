import Layout from '../components/Layout';
import Partner from '../components/Partner';
import partners from '../src/data';

const Partners = () => (
  <Layout>
      {partners.map((partner, index) =>
        <Partner key={partner.id}
          id={index}
          partner={partner.id}
          website={partner.website} />)}
  </Layout>
)

export default Partners;