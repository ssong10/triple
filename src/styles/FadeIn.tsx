import { keyframes, css } from 'styled-components';

const fadeIn = keyframes`
  from {
    transform: translateY(10px);
    opacity: 0;
  }

  to {
    transform: translateY(0px);
    opacity: 1;
  }
`;
const FadeInDelay = (time:number) => css`
  opacity:0;
  animation: ${fadeIn} 0.7s linear ${time/1000}s;
  animation-fill-mode: forwards;
`
export default FadeInDelay;