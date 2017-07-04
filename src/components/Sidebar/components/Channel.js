import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Channel = props => (
  <ChannelContainer>
    <ChannelText>{props.name}</ChannelText>
  </ChannelContainer>
);

const ChannelContainer = styled.div`
  width: 48px;
  height: 48px;
  margin: 8px;
  background-color: #616161;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    margin: 4px;
    border: solid 4px #979797;
  }
`;

const ChannelText = styled.p`
  margin: 0;
  font-size: 24px;
  color: #BDBDBD;
`;

Channel.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Channel;
