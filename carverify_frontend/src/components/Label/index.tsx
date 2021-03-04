import React from 'react';
import { Container } from './styles';
import { setTestId } from '../../utils/getTestId';
import { LabelInterface } from './props';

const Label: React.FC<LabelInterface> = ({
  children,
  testId,
  type,
  ...rest
}) => {
  const getTestIdData = { testId, index: rest.index, name: 'label' };

  return (
    <Container data-testid={setTestId(getTestIdData)} type={type}>
      {children}
    </Container>
  );
};

export default Label;
