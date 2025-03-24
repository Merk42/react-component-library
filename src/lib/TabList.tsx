import React from "react";
import { ReactElement, useState } from "react";
import TabItem from "./TabItem";
import { TabItemProps, TabListProps } from "../types/TabTypes";
import { sanitizeForId } from "../utils/StringUtils";
// import "./Tabs.css";
import styles from './TabList.module.scss';

function updateIndicator(index:number) {
  /*
  const ACTIVE_INDEX = this.tabs.toArray().findIndex(t => t.active() === true)
  const L = this.btz()[ACTIVE_INDEX].nativeElement.offsetLeft + 'px';
  const W = this.btz()[ACTIVE_INDEX].nativeElement.offsetWidth / this.tablist().nativeElement.offsetWidth * 100 + '%';
  this.indicatorLeft.set(L);
  this.indicatorWidth.set(W);
  */
}

const TabList: React.FC<TabListProps> = ({ children, activeTabIndex = 0 }) => {
  const [activeTab, setActiveTab] = useState(activeTabIndex);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  const tabs = React.Children.toArray(children).filter(
    (child): child is ReactElement<TabItemProps> =>
      React.isValidElement(child) && child.type === TabItem
  );

  return (
    <div className="custom-tabs">
      <div
        className={styles.tabs}
        role="tablist"
        aria-orientation="horizontal"
        style={{'--_left':'20px', '--_width':'300px'}as React.CSSProperties}
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