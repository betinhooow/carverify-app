import React, { useContext } from 'react';
import { TabInterface } from './props';
import { Container } from './styles';
import { TabContext } from '..';
import { setTestId } from '../../../utils/getTestId';

const Tab: React.FC<TabInterface> = ({ name, children, testId, ...rest }) => {
  const tabContext = useContext(TabContext);

  const handleClick = (): void => {
    tabContext.changeTab(name);
  };

  const getTestIdData = { testId, index: rest.index, name: 'tab-item' };

  return (
    <Container
      data-testid={setTestId(getTestIdData)}
      active={tabContext.activeTab === name}
      onClick={handleClick}
    >
      <span>{children}</span>
    </Container>
  );
};

export default Tab;
