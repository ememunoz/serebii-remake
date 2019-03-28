import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import mainNewsSource from '../../assets/legendary-palkia.jpg';

import FilterBar from '../../Components/Layout/FilterBar';
import News from '../../Components/News/News';
import NewsFilters from './Components/NewsFilters/NewsFilters';


const newsArr = [
  {
    id: 1,
    imgSrc: mainNewsSource,
    subtitle: 'JANUARY 29TH | POKEMON GO',
    summary: 'As the Hoenn event has ended, Palkia has now become the Level 5 Raid Boss and thus is now available in the game. A new patch is rolling out for Pokémon GO. This patch brings the game up to Version 1.101 and adds various new features.\nThis runs until February 28th 2019. However, with this, the other Raid Bosses are also set to change so keep checking back as we add them to our Raid Battles section.',
    title: 'Palkia + New Update',
  },
  {
    id: 2,
    imgSrc: mainNewsSource,
    subtitle: 'JANUARY 29TH | POKEMON GO',
    summary: 'As the Hoenn event has ended, Palkia has now become the Level 5 Raid Boss and thus is now available in the game. A new patch is rolling out for Pokémon GO. This patch brings the game up to Version 1.101 and adds various new features.\nThis runs until February 28th 2019. However, with this, the other Raid Bosses are also set to change so keep checking back as we add them to our Raid Battles section.',
    title: 'Palkia + New Update',
  },
]

const PageLayout = styled.div`
  display: flex;
`;

const FilterWrapper = styled.div`
  flex: 1;
`;

const ContentWrapper = styled.div`
  padding: 4rem 0 4rem 4rem;
  flex: 2.5;
  &>*:not(:last-child) {
    margin-bottom: 4rem;
  }
`;

class NewsPage extends Component {
  render() {
    return (
      <PageLayout>
        <FilterWrapper>
          <FilterBar>
            <NewsFilters />
          </FilterBar>
        </FilterWrapper>
        <ContentWrapper>
          {newsArr.map(news => <News key={news.id} {...news} />)}
        </ContentWrapper>
      </PageLayout>
    );
  }
}

NewsPage.propTypes = {
}

export default NewsPage;
