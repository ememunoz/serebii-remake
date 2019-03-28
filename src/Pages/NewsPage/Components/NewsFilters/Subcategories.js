import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Checkbox from '../../../../Components/UI/Checkbox/Checkbox';
import LinkButton from '../../../../Components/UI/Buttons/LinkButton';
import Subheading from '../../../../Components/Typography/Subheading';

const SubcategoriesWrapper = styled.div`
  &>*:not(:last-child) {
    margin-bottom: 1.6rem;
  }
`

const ListWrapper = styled.ul`
  list-style: none;

`;

const ListItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 1.6rem;
  }
`;

const Subcategories = props => {
  return (
    <SubcategoriesWrapper>
      <Subheading>Subcategories</Subheading>
      <ListWrapper>
        <ListItem><Checkbox>Pokémon Sun &amp; Moon</Checkbox></ListItem>
        <ListItem><Checkbox>Let's go Pikachu</Checkbox></ListItem>
        <ListItem><Checkbox>Pokémon Go</Checkbox></ListItem>
      </ListWrapper>
      <LinkButton>[ + ] 90 more...</LinkButton>
    </SubcategoriesWrapper>
  )
};

Subcategories.propTypes = {
}

export default Subcategories;
