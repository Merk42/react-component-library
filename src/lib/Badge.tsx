import { ReactNode } from 'react';
import styled from 'styled-components';

const Container = styled.span<{$size?:string, $bg?:string, $border?: string}>`
    position:relative;
    & > span {
        position:absolute;
        top:-1.5rem;
        right:-1.5rem;
        background-color:var(--brand-color);
        color:var(--white);
        display:inline-block;
        height:20px;
        min-width:20px;
        border-radius:100vw;
        text-align:center;
        padding:.25rem;
    }
`;

function formatNumber (number: number) {
    return  new Intl.NumberFormat("en-US").format(number)
}

interface BadgeProps {
    size: string;
    bg: string;
    border: string;
    number: number;
    children: ReactNode
}

const Badge: React.FC<BadgeProps> = ({size, bg, border, number,children}) => {
    return (
        <Container
            $size={size}
            $bg={bg}
            $border={border}
            >
            <span>{formatNumber(number)}</span>
            {children}
        </Container>
    )
}

export default Badge