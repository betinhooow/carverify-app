import React, { useState, useCallback, useRef } from 'react';
import { Container } from './styles';
import { setTestId } from '../../utils/getTestId';
import { InputInterface } from './props';

const Input: React.FC<InputInterface> = ({ name, testId, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFilled(!!inputRef.current.value);
  }, []);

  const getTestIdData = { testId, index: rest.index, name: 'input' };

  return (
    <Container isFocused={isFocused} isFilled={isFilled}>
      <input
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        {...rest}
        data-testid={setTestId(getTestIdData)}
        name={name}
        ref={inputRef}
      />
    </Container>
  );
};

export default Input;
