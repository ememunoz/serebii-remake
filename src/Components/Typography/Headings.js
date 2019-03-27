import styled from 'styled-components';

const defaultHeadingStyles = `
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-weight: bold;
`;

export const Heading1 = styled.h1`
  ${defaultHeadingStyles}
  font-size: 3.2rem;
`;

export const Heading2 = styled.h2`
  ${defaultHeadingStyles}
  font-size: 2.4rem;
`;

export const Heading3 = styled.h3`
  ${defaultHeadingStyles}
  font-size: 2.4rem;
`;
