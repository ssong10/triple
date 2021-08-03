import React from 'react';
import styled from 'styled-components'
import GlobalStyle  from './GlobalStyle';
import Logo from 'components/Logo'
import Metrics from 'components/Metrics';
import Awards from 'components/Awards'

const Container = styled.div`
  margin-top: 100px;
  min-width: 1200px;
`
const SectionWrap = styled.div`
  width: 90%;
  display:flex;
  margin:auto;
  margin: auto;
`
const Column = styled.div`
  width : 50%;
`

const App:React.FC = () => {
  return (
    <Container>
      <GlobalStyle />
      <SectionWrap>
        <Logo/>
        <Column>
          <Metrics/>
          <Awards/>
        </Column>
      </SectionWrap>
    </Container>
  );
}

export default App;
