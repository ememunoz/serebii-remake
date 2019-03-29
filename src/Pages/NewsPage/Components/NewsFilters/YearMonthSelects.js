import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Select from '../../../../Components/UI/Select/Select';
import Subheading from '../../../../Components/Typography/Subheading';

const yearOptions = [
  { label: '2019', value: 2019 },
  { label: '2018', value: 2018 },
  { label: '2017', value: 2017 },
  { label: '2016', value: 2016 },
  { label: '2015', value: 2015 },
  { label: '2014', value: 2014 },
  { label: '2013', value: 2013 },
  { label: '2012', value: 2012 },
];

const monthOptions = [
  { label: 'January', value: 1 },
  { label: 'February', value: 2 },
  { label: 'March', value: 3 },
  { label: 'April', value: 4 },
  { label: 'May', value: 5 },
  { label: 'June', value: 6 },
  { label: 'July', value: 7 },
  { label: 'August', value: 8 },
  { label: 'September', value: 9 },
  { label: 'October', value: 10 },
  { label: 'November', value: 11 },
  { label: 'December', value: 12 },
];

const SelectWrapper = styled.div`
  &>*:not(:last-child) {
    margin-bottom: 8px;
  }
`;

const ComponentWrapper = styled.div`
  &>*:not(:last-child) {
    margin-bottom: 3.2rem;
  }
`;

const YearMonthSelects = props => {
  return (
    <ComponentWrapper>
      <SelectWrapper>
        <Subheading>By year</Subheading>
        <Select
          searchable={false}
          options={yearOptions}
          placeholder={'Please select...'}
        />
      </SelectWrapper>
      <SelectWrapper>
        <Subheading>By month</Subheading>
        <Select
          searchable={false}
          options={monthOptions}
          placeholder={'Please select...'}
        />
      </SelectWrapper>
    </ComponentWrapper>
  )
};

YearMonthSelects.propTypes = {
}

export default YearMonthSelects;
