import moment, { Moment } from 'moment';

const ranges: moment.unitOfTime.Diff[] = [
  'year',
  'month',
  'week',
  'day',
  'hour',
  'minute',
  'second',
];

export default function since(since: string | Moment, until: string | Moment = moment()) {
  const m = moment(since);
  const u = moment(until);

  let message: string | null = null;

  for (const range of ranges) {
    const diff = u.diff(m, range);
    if (diff > 0) {
      const ps = diff === 1 ? range : range + 's';
      message = `${diff} ${ps} ago`;
      break;
    }
  }

  if (!message) message = 'Just now';

  return message;
}
