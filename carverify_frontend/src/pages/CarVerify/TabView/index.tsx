import React from 'react';
import Tabs from '../../../components/Tabs';
import TabList from '../../../components/Tabs/TabList';
import TabPanel from '../../../components/Tabs/TabPanel';
import Tab from '../../../components/Tabs/Tab';
import People from '../../../models/People';
import Car from '../../../models/Car';
import { Container, Group } from './styles';
import Label from '../../../components/Label';

interface TabViewProps {
  people: People;
  cars: Car[];
}

const TabView: React.FC<TabViewProps> = ({ people, cars }) => {
  const pageTestId = 'page-carverify-tab';

  return (
    <Container data-testid={pageTestId}>
      <Tabs initialValue="tab-people" testId={pageTestId}>
        <TabList testId={pageTestId}>
          <Tab name="tab-people" testId={pageTestId}>
            <div>{people.name}</div>
          </Tab>
          {cars.map(item => (
            <Tab
              name={`tab-car-${item.carPlaque}`}
              testId={pageTestId}
              key={item.id}
            >
              <div>{item.carPlaque}</div>
            </Tab>
          ))}
        </TabList>
        <TabPanel name="tab-people" testId={pageTestId}>
          <Label testId={pageTestId}>{`Código: ${people.id}`}</Label>
          <Group>
            <Label testId={pageTestId}>{`Nome: ${people.name}`}</Label>
            <Label testId={pageTestId}>{`Idade: ${people.age}`}</Label>
          </Group>
          <Group>
            <Label testId={pageTestId}>{`Endereço: ${people.address}`}</Label>
            <Label testId={pageTestId}>
              {`Número casa: ${people.nmHouse}`}
            </Label>
          </Group>
          <Group>
            <Label testId={pageTestId}>
              {`Bairro: ${people.neighborhood}`}
            </Label>
            <Label testId={pageTestId}>{`Cidade: ${people.city}`}</Label>
          </Group>
        </TabPanel>
        {cars.map(item => (
          <TabPanel
            name={`tab-car-${item.carPlaque}`}
            testId={pageTestId}
            key={item.id}
          >
            <Label testId={pageTestId}>{`Placa: ${item.carPlaque}`}</Label>
            <Label testId={pageTestId}>{`Marca: ${item.brand}`}</Label>
            <Label testId={pageTestId}>{`Modelo: ${item.model}`}</Label>
            <Label testId={pageTestId}>
              {`Ano/Model: ${item.yearBrand}/${item.yearModel}`}
            </Label>

            <Label testId={pageTestId} type="error">
              {item.carCaster}
            </Label>
          </TabPanel>
        ))}
      </Tabs>
    </Container>
  );
};

export default TabView;
