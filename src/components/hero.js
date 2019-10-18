import styled from 'styled-components'

const HeroHead = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 20vh;
    border-radius: 10px;
    padding: 20px;
    color: #fff;
    box-shadow: 5px 5px 15px 5px rgba(168,168,168,1);
    background: #d53369;
    background: linear-gradient(to right, #d53369, #cbad6d);
`

const HeroFoot = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
    border-radius: 10px;
    margin: 0 auto;
    padding: 10px;
    background: #fff;
    text-align: center;
    font-weight: bold;
    line-height: 0.25;
    transform: translateY(-20px);
`

const ColorTitle = styled.p`
    color: ${props => props.color || `inherit`};
    font-size: 90%;
`

const Hero = () => (
    <div>
        <HeroHead>
            <div style={{width: '50%'}}>
                <h4>Available Balance</h4>
            </div>
            <div style={{width: '50%', textAlign: 'right'}}>
                <h1>€65.00</h1>
            </div>
        </HeroHead>
        <HeroFoot>
            <div style={{width: '50%'}}>
                <ColorTitle color={'olivedrab'}>Income</ColorTitle>
                <p>€160.00</p>
            </div>
            <div style={{width: '50%'}}>
            <ColorTitle color={'tomato'}>Spent</ColorTitle>
                <p>€50.00</p>
            </div>
        </HeroFoot>
    </div>
)


export default Hero