import styled from "styled-components";

const Wrapper = styled.div`
    margin: 4rem 0rem;

`

const Card = styled.div`
    min-height: 25rem;
    border-radius: 2rem;
    overflow: hidden;
    position: relative;

    img{
        border-radius: 2rem;
        position: absolute;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    p {

        position: absolute;
        z-index: 10;
        left: 50%;
        bottom: 0%;
        transform: translate(-50%, 0%);
        color: white;
        width: 100%;
        text-align: center;
        font-weight: 600;
        font-size: 1rem;
        height: 40%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

const Gradient = styled.div`
    z-index: 3;
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));`


const List = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem 0rem;

`

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 3rem;
`

const CCard = styled.div`
    img {
        width: 100%;
        border-radius: 2rem;
    }
    a {
        text-decoration: none;
    }
    h4 {
        text-align: center;
        padding: 1rem;
    }

`
const FormStyle = styled.form`
    margin: 0rem 15rem;
    
    
    div {
        width: 100%;
        position: relative;
    }

    input {
        border: none;
        background: linear-gradient(35deg, #494949, #313131);
        font-size: 1.5rem;
        color: white;
        padding: 1rem 3rem;
        border: none;
        border-radius: 1rem;
        outline: none;
        width: 100%;
    }

    svg {
        position: absolute;
        top: 50%;
        left: 0%;
        transform: translate(100%,-50%);
        color: white;
    }



`

const DetailWrapper = styled.div`
    margin-top: 10rem;
    margin-bottom: 5rem;
    display: flex;

    .active {
        background: linear-gradient(35deg, #494949, #313131);
        color: white;
    }

    h2 {
        margin-bottom: 2rem;
    }

    li {
        font-size: 1.2rem;
        line-height: 2.5rem;
    }
    ul {
        margin-top: 2rem;
    }


`

const Button = styled.button`
    padding: 1rem 2rem;
    color: #313131;
    background: white;
    border: 2px solid black;
    margin-right: 2rem;
    font-weight: 600;
`

const Info = styled.div`
    margin-left: 10rem;
`



export { Wrapper, Gradient, Card, List, Grid, CCard, FormStyle, Button, DetailWrapper, Info} 