import React from 'react';
import styled from 'styled-components';

const SideBlockContainer = styled.div`
  margin: .5rem 0px;
`;

const SideBlockListItem = styled.li`
  list-style-type: none!important;
`;

const SideBlock = ({ title, list }) => {
  return (
    <SideBlockContainer>
      <b>{title}</b>
      <ul>
      {list.map((item, index) => (
        <SideBlockListItem key={'SideBlockItem' + index}>{item}</SideBlockListItem>
      ))}
      </ul>
    </SideBlockContainer>
  );
};

export default SideBlock;
