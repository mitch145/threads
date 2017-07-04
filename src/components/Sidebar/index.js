// Vendor Components
import React from 'react';
import styled from 'styled-components';

// Custom Components
import Channel from './components/Channel';
import Thread from './components/Thread';

const Sidebar = () => (
  <Container>
    <Channels>
      <Channel name="VR" />
      <Channel name="AR" />
      <Channel name="AI" />
    </Channels>
    <Threads>
      <Thread type="P" user="Mitch Ball" title="Introducing threads!" />
      <Thread type="J" user="Mitch Ball" title="Threads is hiring!" />
      <Thread type="Q" user="Mitch Ball" title="How do i make a new thread?" />
    </Threads>
  </Container>
);

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

const Threads = styled.div`
  padding: 4px;
  background-color: #EEEEEE;
  display: flex;
  flex-direction: column;
`;

export default Sidebar;
