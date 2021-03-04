import { DefaultPrivateProps } from '../../../utils/DefaultPrivateProps';

export interface TabPanelProps {
  name: string;
}

export interface TabsInterface extends TabPanelProps, DefaultPrivateProps {}
