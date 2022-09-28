import styled from 'styled-components';

export default function Footer({NumPerg,count}) {

    return (
        <FooterStyle>
            <h4>{count}/{NumPerg-1} concluidos</h4>
        </FooterStyle>
    )
}

const FooterStyle = styled.footer`

    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: white;
    z-index: 1;
    width: 100%;
    min-height: 70px;
    padding: 14px 10px;
    font-size: 18px;
    color: black;
    position: fixed;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 20px;

    box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
`