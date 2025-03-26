import React from "react";
import { ReactElement, useEffect, useRef, useState } from "react";
import AccordionItem from "./AccordionItem";
import { TabItemProps, TabListProps } from "../types/TabTypes";
import { sanitizeForId } from "../utils/StringUtils";
import Icon from "./Icon";
// import "./Tabs.css";
import styles from './AccordionList.module.scss';


const TabList: React.FC<TabListProps> = ({ children, activeTabIndex = 0 }) => {
  const [activeTab, setActiveTab] = useState(activeTabIndex);
  
  const handleTabClick = (index: number) => {
    if (index === activeTab) {
      setActiveTab(-1);
    } else {
      setActiveTab(index);
    }
    
  };


  const tabs = React.Children.toArray(children).filter(
    (child): child is ReactElement<TabItemProps> =>
      React.isValidElement(child) && child.type === AccordionItem
  );

  return (
    <div className="custom-tabs">

        {tabs.map((tab, index) => (
            <div className={styles.accordion}>
                <button
                key={`tab-btn-${index}`}
                role="tab"
                id={`tab-${sanitizeForId(tab.props.label)}`}
                aria-controls={`panel-${sanitizeForId(tab.props.label)}`}
                aria-selected={activeTab === index}
                onClick={() => handleTabClick(index)}
                >
                {tab.props.label}

                <Icon style={{'padding':'0 20px'}} icon={activeTab === index ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}/>

                </button>


                <AccordionItem
                key={index}
                label={tab.props.label}
                isActive={activeTab === index ? true : false}
                >
                {tab.props.children}
                </AccordionItem>
            </div>
        ))}
    </div>
  );
};

export default TabList;