import styled from 'styled-components';

// Content Container

const Content = styled.main`
  padding: 1rem 2rem;
  text-align: justify;
  font-size: 1.1rem;
  @media only screen and (max-width: 960px) {
    padding: .25rem .50rem;
    width: 93%;
    margin: 0 auto;
  };
`;

// Navbar

const Navbar = styled.nav`
  text-align: center;
  position: sticky;
  top: 0;
  z-index: 2;
  background-color: #d9d9d9;
  border-bottom: 1px solid hsl(350, 57%, 50%);
`;

const NavItem = styled.div`
  display: inline-block;
  padding: 0 1.1rem;
  line-height: 6.5rem;
  font-size: 1.1rem;
  @media only screen and (max-width: 1320px) {
    line-height: 2.5rem;
  }
  @media only screen and (max-width: 960px) {
    line-height: 1.5rem;
    font-size: 1rem;
    padding: .45rem;
    margin: .35rem .55rem;
    border: .13rem solid #868686;
    background-color: #f4f4f4;
    width: 34%;
  };
`;

const NavLink = styled.a`
  &:link{
    color: hsl(350, 57%, 50%);
  };
  &:visited{
    color: hsl(350, 57%, 37%); 
  };
  &:hover{
    color: hsl(230, 20%, 55%);
  };
  &:active{
    color: hsl(230, 20%, 55%);
  };
`;

const CompanyLogo = styled.img`
  max-height: 6.4rem;
  float: left;
  opacity: .75;
  @media only screen and (max-width: 1320px) {
    float: none;
    display: block;
    margin: 0 auto;
  };
  @media only screen and (max-width: 960px) {
    margin-bottom: .5rem;
  };

`;

// Partner Page


const Partner = styled.div`
  display: flex;
  flex-direction: ${props => props.id % 2 === 1 ?
    'row-reverse' :
    'row'};
    margin: 1rem 0;
  justify-content: space-between;
  @media only screen and (max-width: 960px) {
    display: block;
  };
  padding: 1rem 0;  
`;

const PartnerLogoContainer = styled.div`
  flex: 30%;
  text-align: center;
  padding: 1.5rem 0;
`;


const PartnerLogo = styled.img`
  max-width: 95%;
  height: auto;
`;

const PartnerDesc = styled.article`
  flex: 65%;
  text-align: ${props => props.id % 2 === 0 ?
    'left' :
    'right'};
  padding: 0rem 1rem;
`;

// Preorder Page

const PreOrderTable = styled.table`
  border-collapse: collapse;
  margin: 4rem auto;
  width: 70%;
  & > caption {
   font-size: 1.3rem;
   margin-bottom: 3rem; 
  };
  @media only screen and (max-width: 960px) {
    width: 95%;
    font-size: 1rem;
  }
`;


const PreOrderRow = styled.tr`
  border-bottom: ${props => props.head === true ?
    '1px solid hsl(350, 57%, 50%)' :
    'none'};
  &:nth-child(even){
    background-color: #d9d9d9;
  }     
`;

const PreOrderCell = styled.td`
  line-height: 2rem;
  padding: .5rem;
  @media only screen and (max-width: 960px) {
    line-height: 1.3rem;
    text-align: center;
    &:nth-child(1) {
      width: 20%;
    };
    &:nth-child(2) {
      width: 30%;
    }
  }
`;

const HeaderCell = styled(PreOrderCell)`
  font-weight: bold;
  font-size: 1.1rem;
`;

// Showroom Page

const Map = styled.iframe`
  width: 80%;
  height: 30rem;
  border: 0;
  @media only screen and (max-width: 960px) {
    width: 95%;
    height: 25rem;
  }
`;

// Contact Page

const ContactsContainer = styled.section`
  display: flex;
  justify-content: space-evenly;
  margin-top: 5rem;
  @media only screen and (max-width: 960px) {
    flex-wrap: wrap;
    margin-top: 1rem;
  };
`;

const ContactImage = styled.img`
  max-width: 100%;
  height: auto;
`;

const Contact = styled.div` 
  width: 33%;
  text-align: center;
  padding: 0.5rem 1rem;
  & > p {
    line-height: 1rem;
    margin: .4rem;
  }
  @media only screen and (max-width: 960px) {
    width: 85%;
  } 
`;

const CompanyDataContainer = styled.div`
  margin-top: 3rem;
  font-size: .95rem;
  text-align: center;
  & summary {
    outline: none;
  }
  & li {
    list-style-type: none;
    line-height: 1rem;
  };
`;

export {
  Content,
  Navbar,
  NavItem,
  NavLink,
  CompanyLogo,
  Partner,
  PartnerLogoContainer,
  PartnerLogo,
  PartnerDesc,
  PreOrderTable,
  PreOrderRow,
  PreOrderCell,
  HeaderCell,
  Map,
  ContactsContainer,
  ContactImage,
  Contact,
  CompanyDataContainer
};