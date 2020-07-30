import { Moment } from 'moment';

export type Range = 'year' | 'month' | 'week' | 'day' | 'hour' | 'minute' | 'second';

export interface Options {
  ranges?: Range[];
}

export type DateParameter = string | Moment | Date;
