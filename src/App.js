import React from 'react';
import styled from 'styled-components';

class App extends React.Component {
  render() {
    return (
      <Container>
        <Channels>
          <ChannelContainer>
            <ChannelText>VR</ChannelText>
          </ChannelContainer>
          <ChannelContainer>
            <ChannelText>AR</ChannelText>
          </ChannelContainer>
          <ChannelContainer>
            <ChannelText>AI</ChannelText>
          </ChannelContainer>
        </Channels>
        <Threads>
          <ThreadContainer>
            <ThreadHeader>
              <ThreadHeaderText>P</ThreadHeaderText>
            </ThreadHeader>
            <ThreadContent>
              <ThreadUser>Mitch Ball</ThreadUser>
              <ThreadTitle>Introducing threads!</ThreadTitle>
            </ThreadContent>
          </ThreadContainer>
          <ThreadContainer>
            <ThreadHeader>
              <ThreadHeaderText>J</ThreadHeaderText>
            </ThreadHeader>
            <ThreadContent>
              <ThreadUser>Mitch Ball</ThreadUser>
              <ThreadTitle>Threads is hiring!</ThreadTitle>
            </ThreadContent>
          </ThreadContainer>
          <ThreadContainer>
            <ThreadHeader>
              <ThreadHeaderText>Q</ThreadHeaderText>
            </ThreadHeader>
            <ThreadContent>
              <ThreadUser>Mitch Ball</ThreadUser>
              <ThreadTitle>How do I make a new thread?!</ThreadTitle>
            </ThreadContent>
          </ThreadContainer>
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
  background-color: #424242;
  display: flex;
  flex-direction: column;
`;

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

const Threads = styled.div`
  background-color: #EEEEEE;
`;

const ThreadContainer = styled.div`
  width: 240px;
  height: 56px;
  margin: 8px;
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
`

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

export default App;
