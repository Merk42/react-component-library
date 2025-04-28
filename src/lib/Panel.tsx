import { ReactNode } from 'react';
import styled from 'styled-components';

const Container = styled.div<{$size?:string, $bg?:string, $border?: string}>`
  	padding: ${props => padding(props.$size)};
	margin-bottom:.75rem;
    border-width:2px;
    border-style: solid;
    border-color: ${props => border(props.$border)};
    background-color: ${props => bgcolor(props.$bg)};
    border-radius:1rem;
`;
function border(color?:string):string {
    switch (color) {
        case "accent1":
            return "#3EB1C8"
        case "accent2":
            return "#ECA154"
        case "accent3":
            return "#B15533"
        case "accent4":
            return "#D29F13"
        case "accent5":
            return "#D592AA"
        case "accent6":
            return "#99D6EA"
        default:
            return "#000"
    }
}

function padding(size?:string):string {
    switch (size) {
        case "compact":
            return ".75rem"
        case "expand":
            return "3rem"
        default:
            return "1.5rem"
    }  
}

function bgcolor(color?:string):string {
    switch (color) {
        case "bg1":
            return "#FBF7F4"
        case "bg2":
            return "#E6E6E6"
        case "bg3":
            return "#F2F7F5"
        default:
            return "#FFF"
    }  
}

interface PanelProps {
    size: string;
    bg: string;
    border: string;
    children: ReactNode
}

const Panel: React.FC<PanelProps> = ({size, bg, border, children}) => {
    return (
        <Container
            $size={size}
            $bg={bg}
            $border={border}
            >
            {children}
        </Container>
    )
}

export default Panel