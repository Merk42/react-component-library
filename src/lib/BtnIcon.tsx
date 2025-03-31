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
function BtnIcon(props:any) {
    return (
        <Container>
            <Icon icon={props.icon} />
        </Container>
    )
}

export default BtnIcon