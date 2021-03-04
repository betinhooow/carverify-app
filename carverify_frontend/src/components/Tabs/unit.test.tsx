import React from 'react';
import { render, fireEvent, RenderResult } from '@testing-library/react';
import Tabs from '.';
import TabList from './TabList';
import Tab from './Tab';
import TabPanel from './TabPanel';

interface Setup {
  tab: HTMLDivElement;
  buttonTab: HTMLLIElement;
  utils: RenderResult<typeof import('testing-library__dom/queries')>;
}

describe('<Tabs />', () => {
  const mockTestId = 'testId';

  const setup = (): Setup => {
    const utils = render(
      <Tabs initialValue="tab-1" testId={mockTestId}>
        <TabList testId={mockTestId}>
          <Tab name="tab-1" testId={mockTestId} index={0}>
            <div>Tab 1</div>
          </Tab>
          <Tab name="tab-2" testId={mockTestId} index={1}>
            <div>Tab 2</div>
          </Tab>
        </TabList>
        <TabPanel name="tab-1" testId={mockTestId}>
          <p>Content tab 1</p>
        </TabPanel>
        <TabPanel name="tab-2" testId={mockTestId}>
          <p>Content tab 2</p>
        </TabPanel>
      </Tabs>,
    );

    const tab = utils.getByTestId(`${mockTestId}-tab-list`) as HTMLDivElement;
    const buttonTab = utils.getByTestId(
      `${mockTestId}-tab-item-1`,
    ) as HTMLLIElement;

    return {
      tab,
      buttonTab,
      utils,
    };
  };

  test('Deve renderizar a lista de tabs', () => {
    const { tab } = setup();

    expect(tab.hasAttribute('data-testid')).toBe(true);
    expect(tab.getAttribute('data-testid')).toBe(`${mockTestId}-tab-list`);
  });

  test('Deve renderizar o painel do tab selecionado', () => {
    const { utils } = setup();

    expect(utils.getByTestId(`${mockTestId}-tab-panel`)).toBeDefined();
  });

  test('Simula o click ao trocar de aba', () => {
    const { buttonTab, utils } = setup();

    fireEvent.click(buttonTab);

    expect(utils.getByText('Content tab 2')).toBeDefined();
  });
});
