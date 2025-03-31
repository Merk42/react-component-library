import React from "react";
import { ReactElement, useState } from "react";
import AccordionItem from "./AccordionItem";
import { AccordionItemProps, AccordionListProps } from "../types/AccordionTypes";
import { sanitizeForId } from "../utils/StringUtils";
import Icon from "./Icon";
// import "./Accordions.css";
import styles from './AccordionList.module.scss';


const AccordionList: React.FC<AccordionListProps> = ({ children, activeAccordionIndex = 0 }) => {
  const [activeAccordion, setActiveAccordion] = useState(activeAccordionIndex);
  
  const handleAccordionClick = (index: number) => {
    if (index === activeAccordion) {
      setActiveAccordion(-1);
    } else {
      setActiveAccordion(index);
    }
    
  };


  const tabs = React.Children.toArray(children).filter(
    (child): child is ReactElement<AccordionItemProps> =>
      React.isValidElement(child) && child.type === AccordionItem
  );

  const isActive = (index:number) => {
    return activeAccordion === index
  }

  return (
    <div className="custom-tabs">

        {tabs.map((tab, index) => (
            <div className={styles.accordion}>
                <button
                key={`tab-btn-${index}`}
                role="tab"
                id={`tab-${sanitizeForId(tab.props.label)}`}
                aria-controls={`panel-${sanitizeForId(tab.props.label)}`}
                aria-selected={isActive(index)}
                onClick={() => handleAccordionClick(index)}
                >
                {tab.props.label}

                <Icon style={{'padding':'0 20px'}} icon={isActive(index) ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}/>

                </button>


                <AccordionItem
                key={index}
                label={tab.props.label}
                isActive={isActive(index) ? true : false}
                >
                {tab.props.children}
                </AccordionItem>
            </div>
        ))}
    </div>
  );
};

export default AccordionList;