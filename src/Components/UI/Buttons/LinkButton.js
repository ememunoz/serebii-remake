import styled from 'styled-components';

const Button = styled.button`
  ${props => props.inputColor || "palevioletred"}
`;

export default Button;
