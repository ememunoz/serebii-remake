import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FilterBarWrapper = styled.div`
  color: #060D29;
  width: 100%;
  padding: 4rem;
  margin-left: -4rem;
  position: relative;
  flex-shrink: 1;
`;

const FilterOptions = styled.div`
  position: fixed;
`;

const FilterBar = ({ children }) => {
  return (
    <FilterBarWrapper>
      <FilterOptions>
        {children}
      </FilterOptions>
    </FilterBarWrapper>
  )
};

FilterBar.propTypes = {
  children: PropTypes.node.isRequired
}

export default FilterBar;
