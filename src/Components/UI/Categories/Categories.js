import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const CategoryWrapper = styled.ul`
  list-style: none;
  font-weight: bold;
  &>*:not(:last-child) {
    margin-bottom: 1.6rem;
  }
`;

const activeStyles = css`
  content: '';
  position: absolute;
  display: block;
  width: 6px;
  height: 6px;
  border: solid ${props => props.theme.accentColor};
  border-width: 2px 2px 0 0;
  transform: rotate(45deg);
  left: -2rem;
`;

const CategoryItem = styled.li`
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  color: ${props => props.active ? props.theme.accentColor : 'currentColor'};
  &:hover {
    color: ${props => props.theme.accentColor};
  }

  &:before {
    ${props => props.active ? activeStyles : ''};
  }

  &:hover:before {
    ${activeStyles}
  }
`;

const Categories = ({ activeItemId, items }) => {
  return (
    <CategoryWrapper>
      {items.map(item => (
        <CategoryItem key={item.id} active={activeItemId === item.id}>{item.name}</CategoryItem>
      ))}
    </CategoryWrapper>
  )
};

Categories.propTypes = {
  activeItemId: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  })).isRequired
}

export default Categories;
