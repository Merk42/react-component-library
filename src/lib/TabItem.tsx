import { TabItemProps } from "../types/TabTypes";
import { sanitizeForId } from "../utils/StringUtils";

import styled from 'styled-components';

const Container = styled.div<{$isActive?:boolean}>`
    display: ${props => props.$isActive ? 'block' : 'none'}
`;


interface TabItemPropsAnimated extends TabItemProps {
  isActive?: boolean;
}

const TabItem: React.FC<TabItemPropsAnimated> = ({
  label,
  children,
  isActive = false,
}) => (
  
    <Container
        $isActive={isActive}
        tabIndex={isActive ? 0 : -1}
      className={`tab-content p-3 bg-light`}
      role="tabpanel"
      aria-labelledby={`tab-${sanitizeForId(label)}`}
      id={`panel-${sanitizeForId(label)}`}
    >
      {children}
    </Container>
);

export default TabItem;