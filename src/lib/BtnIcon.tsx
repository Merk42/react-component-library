import Icon from "./Icon"
import styled from 'styled-components';

const Container = styled.button`
    border-radius:100vw;
    width:48px;
    height:48px;
    display: inline-grid;
    place-content: center;
`;
function BtnIcon(props:any) {
    return (
        <Container>
            <Icon icon={props.icon} />
        </Container>
    )
}

export default BtnIcon