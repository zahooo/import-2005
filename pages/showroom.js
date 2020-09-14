import Layout from './components/Layout';
import * as S from '../src/styles/styles';

const ShowRoom = () => (
  <Layout>
    <p>Bemutatótermünk címe: 1131 Budapest, Jász utca 179.</p>
    <S.Map
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2693.11849295611!2d19.089945515071317!3d47.546022500154784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741dbb12fa4e005%3A0x815761aae5cc8056!2sBudapest%2C%20J%C3%A1sz%20u.%20179%2C%201131!5e0!3m2!1shu!2shu!4v1599734166716!5m2!1shu!2shu" allowfullscreen=""
      aria-hidden="false"
      tabIndex="0">
    </S.Map>
  </Layout>
)

export default ShowRoom;