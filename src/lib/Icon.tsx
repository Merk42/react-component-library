import styled from 'styled-components';

const IconContainer = styled.span<{$size?:string, $bg?:string, $border?: string}>`
  	font-family: "Material Icons";
    display: inline-grid;
    place-content: center;
    font-size:40px;
    height:48px;
    width:48px;
    text-align:center;
`;


function Icon(props:any) {
    return (
        <IconContainer>{props.icon}</IconContainer>
    )
}

export default Icon