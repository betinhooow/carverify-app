import { DefaultPrivateProps } from '../../utils/DefaultPrivateProps';

export interface TabContextData {
  activeTab: string;
  changeTab: React.Dispatch<React.SetStateAction<string>>;
}

export interface TabsProps {
  initialValue: string;
}

export interface TabsInterface extends TabsProps, DefaultPrivateProps {}
