import Icon from "./Icon"
import styled from 'styled-components';

const Container = styled.button`
    border-radius:100vw;
    width:48px;
    height:48px;
    display: inline-grid;
    place-content: center;
    border-color:var(--brand-color);
    color:var(--brand-color);
    background-color:var(--white);
    &:hover {
        background-color:hsl(from var(--brand-color) h 50% 85%)
    }
`;

const BtnIcon: React.FC<{icon:string}> = ({ icon }) => {
    return (
        <Container>
            <Icon icon={icon} />
        </Container>
    )
}

export default BtnIcon