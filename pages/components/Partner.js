import * as S from './styles/styles';

const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

const Partner = ({ partner, id, website }) => (
  <S.Partner id={id}>
    <S.PartnerLogoContainer>
      <a href={website}><S.PartnerLogo src={`/c_logo_${partner}.png`} /></a>
    </S.PartnerLogoContainer>
    <S.PartnerDesc id={id}>
      <p>
        {text}
      </p>
    </S.PartnerDesc>
  </S.Partner>
)

export default Partner;