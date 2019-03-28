import styled from 'styled-components';
import backgroundImg from '../../assets/Pokemon_Forest2.png';

const Background = styled.div`
  &:before {
    content: '';
    position: fixed;
    left: -5px;
    right: 0;
    z-index: -1;
    display: block;
    height: 105vh;
    width: 105vw;
    filter: blur(3px);
    background-position-y: -364px;
    background-image: linear-gradient( rgba(57, 57, 57, 0.5), rgba(57, 57, 57, 0.5)), url(${backgroundImg})
  }
`

export default Background;
