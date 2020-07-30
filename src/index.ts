import moment, { Moment } from 'moment';
import { Options, DateParameter, Range } from './types';

const defaultRanges: Range[] = ['year', 'month', 'week', 'day', 'hour', 'minute'];

export default function since(
  since: DateParameter,
  until: DateParameter = moment(),
  options?: Options,
) {
  const sinceMoment = moment(since);
  const untilMoment = moment(until);
  const ranges = options?.ranges ?? defaultRanges;

  const message = theActualWork(sinceMoment, untilMoment, ranges);

  return message;
}

function theActualWork(since: Moment, until: Moment, ranges: moment.unitOfTime.Diff[]) {
  let message = 'Just now';

  for (const range of ranges) {
    const diff = until.diff(since, range);
    if (diff > 0) {
      const ps = diff === 1 ? range : range + 's';
      message = `${diff} ${ps} ago`;
      break;
    }
  }

  return message;
}
