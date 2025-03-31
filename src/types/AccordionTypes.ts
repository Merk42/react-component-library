import { ReactElement, ReactNode } from "react";

export interface AccordionItemProps {
  label: string;
  children: ReactNode;
}

export interface AccordionListProps {
  activeAccordionIndex: number;
  children: ReactElement<AccordionItemProps> | ReactElement<AccordionItemProps>[];
}