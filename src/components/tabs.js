import React, { useState } from "react";
import PropTypes from "prop-types";
import Tab from "./tab";
import styled from "styled-components";

const TabList = styled.div`
  border-bottom: 1px solid #ccc;
  padding-left: 0;
`;

const Tabs = props => {
  const [activeTab, setActiveTab] = useState(props.children[0].props.label);

  const onClickTabItem = tab => {
    setActiveTab(tab);
  };

  return (
    <div>
      <TabList>
        {props.children.map(child => {
          const { label } = child.props;

          return (
            <Tab
              activeTab={activeTab}
              key={label}
              label={label}
              onClick={onClickTabItem}
            />
          );
        })}
      </TabList>
      <div>
        {props.children.map(child => {
          if (child.props.label !== activeTab) return undefined;
          return child.props.children;
        })}
      </div>
    </div>
  );
};

Tabs.displayName = "Tabs";
Tabs.propTypes = {
  children: PropTypes.instanceOf(Array).isRequired
};

export default Tabs;
