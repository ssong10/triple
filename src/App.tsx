import React from 'react';
import Metrics from './components/Metrics';
import styled from 'styled-components'

const Container = styled.div`
  display:flex;
  margin:auto;
`

const App:React.FC = () => {
  return (
    <Container>
        <Metrics></Metrics>
    </Container>
  );
}

export default App;
