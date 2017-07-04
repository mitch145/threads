import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Thread = props => (
  <ThreadContainer>
    <ThreadHeader>
      <ThreadHeaderText>{props.type}</ThreadHeaderText>
    </ThreadHeader>
    <ThreadContent>
      <ThreadUser>{props.user}</ThreadUser>
      <ThreadTitle>{props.title}</ThreadTitle>
    </ThreadContent>
  </ThreadContainer>
);

const ThreadContainer = styled.div`
  width: 240px;
  height: 56px;
  margin: 4px;
  border-radius: 4px;
  background-color: #FFFFFF;
  display: flex;
  
`;

const ThreadHeader = styled.div`
  width: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #03A9F4;
  border-radius: 4px 0 0 4px;
`;

const ThreadHeaderText = styled.p`
  margin: 0;
  font-size: 40px;
  font-weight: 100;
  color: #81D4FA;
`;

const ThreadContent = styled.div`
  margin: 4px;
  width: 176px;
`;

const ThreadUser = styled.p`
  margin: 4px;
  font-size: 16px;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ThreadTitle = styled.p`
  margin: 4px;
  font-size: 16px;
  font-weight: 100;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

Thread.propTypes = {
  type: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Thread;
