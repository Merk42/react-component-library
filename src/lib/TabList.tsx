import React from "react";
import { ReactElement, useEffect, useRef, useState } from "react";
import TabItem from "./TabItem";
import { TabItemProps, TabListProps } from "../types/TabTypes";
import { sanitizeForId } from "../utils/StringUtils";
// import "./Tabs.css";
import styles from './TabList.module.scss';


const TabList: React.FC<TabListProps> = ({ children, activeTabIndex = 0 }) => {
  const [activeTab, setActiveTab] = useState(activeTabIndex);
  
  useEffect(() => {
    handleTabClick(activeTabIndex);
  }, [activeTabIndex]);

  const updateIndicator = (index:number) => {
    //@ts-ignore
    const childNodes = Array.from(parentRef?.current?.children);
    //@ts-ignore
    const L = childNodes[index].offsetLeft + 'px';
    //@ts-ignore
    const W = childNodes[index].offsetWidth / parentRef.current.offsetWidth * 100 + '%';
    setIndicatorLeft(L);
    setIndicatorWidth(W);
  }

  const parentRef = useRef(null);

  const [indicatorLeft, setIndicatorLeft] = useState('0px');
  const [indicatorWidth, setIndicatorWidth] = useState('0%');


  const handleTabClick = (index: number) => {
    updateIndicator(index)
    setActiveTab(index);
  };


  const tabs = React.Children.toArray(children).filter(
    (child): child is ReactElement<TabItemProps> =>
      React.isValidElement(child) && child.type === TabItem
  );

  return (
    <div className="custom-tabs">
      <div
        ref={parentRef}
        className={styles.tabs}
        role="tablist"
        aria-orientation="horizontal"
        style={{'--_left':indicatorLeft, '--_width':indicatorWidth}as React.CSSProperties}
      >
        {tabs.map((tab, index) => (
            <button
              key={`tab-btn-${index}`}
              role="tab"
              id={`tab-${sanitizeForId(tab.props.label)}`}
              aria-controls={`panel-${sanitizeForId(tab.props.label)}`}
              aria-selected={activeTab === index}
              onClick={() => handleTabClick(index)}
            >
              {tab.props.label}
            </button>
        ))}
      </div>

      {tabs.map((tab, index) => (
        <TabItem
          key={index}
          label={tab.props.label}
          isActive={activeTab === index ? true : false}
        >
          {tab.props.children}
        </TabItem>
      ))}
    </div>
  );
};

export default TabList;