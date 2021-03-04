import { CarReducerType } from './Car';

export interface DefaultState {
  Car: CarReducerType;
}

export interface DefaultAction {
  type: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
}
