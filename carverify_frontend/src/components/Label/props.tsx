import { LabelHTMLAttributes } from 'react';
import { DefaultPrivateProps } from '../../utils/DefaultPrivateProps';

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  type?: 'error';
}

export interface LabelInterface extends LabelProps, DefaultPrivateProps {}
