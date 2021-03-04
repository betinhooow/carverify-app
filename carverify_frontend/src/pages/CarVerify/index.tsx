import React from 'react';
import { useHistory } from 'react-router-dom';
import TabView from './TabView';
import { Container, Content } from './styles';
import Button from '../../components/Button';
import { useTypedSelector } from '../../reducers';

const CarVerify: React.FC = () => {
  const pageTestId = 'page-carverify';

  const history = useHistory();
  const { car, ...people } = useTypedSelector(state => state.Car.item);

  return (
    <Container data-testid={pageTestId}>
      <Button testId={pageTestId} onClick={() => history.push('/')}>
        Voltar
      </Button>
      <Content>
        <h1>{`Bem vindx, ${people.name}`}</h1>
        <TabView people={people} cars={car} />
      </Content>
    </Container>
  );
};

export default CarVerify;
