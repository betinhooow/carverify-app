import React from 'react';
import { Container } from './styles';
import { TabsListInterface } from './props';
import { setTestId } from '../../../utils/getTestId';

const TabList: React.FC<TabsListInterface> = ({ children, testId }) => {
  const getTestIdData = { testId, name: 'tab-list' };

  return (
    <Container data-testid={setTestId(getTestIdData)}>{children}</Container>
  );
};

export default TabList;
