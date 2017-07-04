import React from 'react';
import styled from 'styled-components';

class App extends React.Component {
  render() {
    return (
      <Container>
        <Channels>
          <ChannelContainer>
            <ChannelText>PM</ChannelText>
          </ChannelContainer>
          <ChannelContainer>
            <ChannelText>RV</ChannelText>
          </ChannelContainer>
          <ChannelContainer>
            <ChannelText>CS</ChannelText>
          </ChannelContainer>
        </Channels>
        <Threads>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
        </Threads>
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
`;

const Channels = styled.div`
  padding: 8px;
  background-color: #616161;
  display: flex;
  flex-direction: column;
`;

const ChannelContainer = styled.div`
  width: 48px;
  height: 48px;
  margin: 8px;
  background-color: #757575;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    margin: 4px;
    border: solid 4px #9E9E9E;
  }
`;

const ChannelText = styled.p`
  margin: 0;
`;

const Threads = styled.div`
  padding: 8px;
  width: 240px;
  background-color: #9E9E9E;
`;
export default App;
