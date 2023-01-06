import styled from "styled-components";

function Login(props) {
    return (
        <Container>
            <Content>    
                <CTA>
                    <CTAOne src={require('../images/cta-logo-one.png')}/>
                    <SignUp>
                        GET IT ALL THERE
                    </SignUp>
                    <Description>
                    Disney Plus is an on-demand streaming service created by The Walt Disney Company. With Disney Plus, subscribers can watch thousands of Disney movies and series on their devices (smart TVs, phones, laptops, tablets, and gaming consoles). The service includes unlimited downloads so you can watch anywhere, anytime.
                    </Description>
                    <CTATwo src={require('../images/cta-logo-two.png')}/>
                </CTA>
                <BgImage/>
            </Content>
        </Container>
    );
  }
  
const Container = styled.section`
    overflow: hidden;
    display: flex;
    text-align: center;
    height: 100vh;
`;

const Content = styled.div`
    margin-bottom: 10vw;
    width: 100%;
    position: relative;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    flex-direction: column;
    padding: 80px 40px;
    height: 100%;
`;

const BgImage = styled.div`
    height: 100%;
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(${require("../images/login-background.jpg")});
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    z-index: -1;
`

const CTA = styled.div`
    max-width: 650px;
    display: flex;
    flex-direction: column;
    width: 48%;
`

const CTAOne = styled.img`
    margin-bottom: 12px;
    max-width: 600px;
    min-height: 1px;
    display: block;
    width: 100%;
`

const SignUp = styled.a`
font-weight: bold;
    color: #f9f9f9;
    background-color: #0063e5;
    margin-bottom: 12px;
    width: 100%;
    letter-spacing: 1.5px;
    font-size: 18px;
    padding: 16.5px 0;
    border: 1px solid transparent;
    border-radius: 4px;
    &:hover{
    background-color: #0483ee;
    }
    cursor: pointer

`

const Description = styled.p`
    color: hsla(0,  0%, 95.3%, 1);
    font-size: 11px;
    margin: 0 0 24px;
    line-height: 1.5;
    letter-spacing: 1.5px;
`

const CTATwo = styled.img`
    max-width: 600px;
    margin-bottom: 20px;
    display: inline-block;
    vertical-align: bottom;
`

export default Login;