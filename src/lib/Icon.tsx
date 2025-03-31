import styled from 'styled-components';

const IconContainer = styled.span<{$size?:string, $bg?:string, $border?: string}>`
  	font-family: "Material Icons";
    display: inline-grid;
    place-content: center;
    font-size:24px;
    height:28px;
    width:28px;
    text-align:center;
`;


function Icon(props:any) {
    return (
        <IconContainer>{props.icon}</IconContainer>
    )
}

export default Icon