import styled from 'styled-components';

const Button = styled.button`
  border: none;
  background: none;
  color: ${props => props.theme.accentColor};
  font-size: 1.6rem;
  font-weight: bold;
  position: relative;
  outline: none;
  cursor: pointer;

  &:after {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    bottom: -3px;
    background-color: currentColor;
    height: 2px;
    width: 100%;
    transform: scaleX(0);
    transition: transform .5s ease 
  }
  &:hover:after {
    transform: scaleX(1);
  }
`;

export default Button;
