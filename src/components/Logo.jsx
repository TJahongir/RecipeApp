import styled from 'styled-components';
import {Link} from 'react-router-dom'
import {GiKoala, GiSloth} from 'react-icons/gi'


const Logo = () => {
  return (
    <Nav>
        <SLogo to={'/'}>
            <GiKoala /> 
            K & S Cuisine
            <GiSloth />
        </SLogo>
    </Nav>
  )
}

const SLogo = styled(Link)`
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: 400;
    font-style: cursive;

`
const Nav = styled.div`
    padding: 4rem 0rem;
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
        font-size: 2rem;
        margin: 0rem 0.5rem;
    }
`
export default Logo