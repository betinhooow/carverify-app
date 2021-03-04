import React, { createContext, useState } from 'react';
import { Container } from './styles';
import { TabsInterface, TabContextData } from './props';
import { setTestId } from '../../utils/getTestId';

export const TabContext = createContext<TabContextData>({} as TabContextData);

const Tabs: React.FC<TabsInterface> = ({ initialValue, children, testId }) => {
  const [activeTab, changeTab] = useState(initialValue);

  const getTestIdData = { testId, name: 'tab-context' };

  return (
    <TabContext.Provider
      value={{ activeTab, changeTab }}
      data-testid={setTestId(getTestIdData)}
    >
      <Container>{children}</Container>
    </TabContext.Provider>
  );
};

export default Tabs;
