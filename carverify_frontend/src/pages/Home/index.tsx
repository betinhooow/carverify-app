import React, { useCallback, SyntheticEvent, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { Container, Content } from './styles';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { ErrorForm } from '../../utils/DefaultPrivateProps';
import getValidationErrors from '../../utils/getValidationErrors';
import CarAction from '../../actions/Car';

const Home: React.FC = () => {
  const pageTestId = 'page-home';

  const [peopleId, setPeopleId] = useState('');
  const [errors, setErrors] = useState({} as ErrorForm);

  useEffect(() => document.getElementById('peopleId').focus());
  const dispatch = useDispatch();

  const history = useHistory();

  const handleSubmit = useCallback(
    async (e: SyntheticEvent) => {
      e.preventDefault();
      try {
        const schema = Yup.object().shape({
          peopleId: Yup.string().required('O Id é obrigatório'),
        });

        await schema.validate(
          { peopleId },
          {
            abortEarly: false,
          },
        );

        const { data } = dispatch(await CarAction.getCarsByPeopleId(peopleId));
        if (!data) {
          throw Error;
        }

        history.push(`carverify`);
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          setErrors(getValidationErrors(err));
          return;
        }

        setErrors({ peopleId: 'Código não encontrado =(' });
      }
    },
    [history, peopleId, dispatch],
  );

  return (
    <Container data-testid={pageTestId}>
      <Content>
        <h3>Qual código buscaremos hoje?</h3>
        <form onSubmit={handleSubmit}>
          <Input
            id="peopleId"
            testId={pageTestId}
            name="peopleId"
            placeholder="Código"
            value={peopleId}
            onChange={({ target }) => setPeopleId(target.value)}
          />
          {errors.peopleId && <div className="error">{errors.peopleId}</div>}

          <Button testId={pageTestId} type="submit">
            Buscar
          </Button>
        </form>
      </Content>
    </Container>
  );
};

export default Home;
