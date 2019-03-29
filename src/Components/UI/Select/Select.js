import styled from 'styled-components';
import Select from 'react-styled-select';

import { desaturate, lighten } from 'polished';

const CustomSelect = styled(Select)`
  --styled-select__border-color: ${props => props.theme.accentColor};
  --styled-select-arrow__color: ${props => props.theme.accentColor};
  --styled-select-value-icon__background-color--hover: ${props => lighten(0.3, props.theme.accentColor)};
  --styled-select-option__background-color--focused: ${props => lighten(0.3, props.theme.accentColor)};;
  --styled-select-option__color--focused: white;
  --styled-select-option__background-color--selected: ${props => props.theme.accentColor};
  --styled-select-option__color--selected: white;

  --styled-select-placeholder__color: ${props => props.theme.accentColor};
  --styled-select-placeholder__font-family: inherit;
  --styled-select-placeholder__font-size: 1.2rem;
`;

export default CustomSelect;
