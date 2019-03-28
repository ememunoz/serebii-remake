import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CheckboxWrapper = styled.label`
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  user-select: none;

  &>input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
`;

const Checkmark = styled.span`
  height: 24px;
  width: 24px;
  background-color: transparent;
  border: 3px solid ${props => props.theme.accentColor};
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;

  &:after {
    content: '';
    display: none;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
  }

  input:checked~& {
    background-color: ${props => props.theme.accentColor};
    &:after {
      display: block;
    }
  }
`;


const Checkbox = ({ checked, children }) => {
  return (
    <CheckboxWrapper>
      <input type='checkbox' />
      <Checkmark />
      {children}
    </CheckboxWrapper>
  )
};

Checkbox.propTypes = {
  children: PropTypes.node.isRequired,
  checked: PropTypes.bool
}

export default Checkbox;
