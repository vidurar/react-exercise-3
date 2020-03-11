import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const TabListItem = styled.div`
  display: inline-block;
  list-style: none;
  margin-bottom: -1px;
  padding: 0.5rem 0.75rem;
  background-color: ${props => props.activeTab === props.label && "white"};
  border: ${props => props.activeTab === props.label && "solid #ccc"};
  border-width: ${props => props.activeTab === props.label && "1px 1px 0 1px"};
`;

const Tab = props => {
  const onClick = () => {
    props.onClick(props.label);
  };

  return (
    <TabListItem
      activeTab={props.activeTab}
      label={props.label}
      onClick={onClick}
    >
      {props.label}
    </TabListItem>
  );
};

Tab.displayName = "Tab";
Tab.propTypes = {
  activeTab: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Tab;
