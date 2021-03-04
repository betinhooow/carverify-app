import React, { useContext } from 'react';
import { TabsInterface } from './props';
import { TabContext } from '..';
import { setTestId } from '../../../utils/getTestId';

const TabPanel: React.FC<TabsInterface> = ({ name, children, testId }) => {
  const tabContext = useContext(TabContext);

  const getTestIdData = { testId, name: 'tab-panel' };

  return (
    tabContext.activeTab === name && (
      <div data-testid={setTestId(getTestIdData)}>{children}</div>
    )
  );
};

export default TabPanel;
