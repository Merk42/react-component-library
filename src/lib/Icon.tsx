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

const Icon: React.FC<{icon:string}> = ({icon}) => {
    return (
        <IconContainer>{icon}</IconContainer>
    )
}

export default Icon