import { InputHTMLAttributes } from 'react';
import { DefaultPrivateProps } from '../../utils/DefaultPrivateProps';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  ref?: React.MutableRefObject<HTMLInputElement>;
}

export interface InputInterface extends InputProps, DefaultPrivateProps {}
