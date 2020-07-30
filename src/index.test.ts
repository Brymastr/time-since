import moment from 'moment';
import since from './index';
import { Options, Range } from './types';

describe('since', () => {
  describe('years', () => {
    test(`'1 year ago' given date over a year ago`, () => {
      const x = moment('2019-06-28');
      const y = moment('2020-07-28');

      const diff = since(x, y);

      expect(diff).toEqual('1 year ago');
    });
    test(`'2 years ago' given date over 2 years ago`, () => {
      const x = moment('2018-06-28');
      const y = moment('2020-07-28');

      const diff = since(x, y);

      expect(diff).toEqual('2 years ago');
    });
    test(`'99 years ago' given date over 99 years ago`, () => {
      const x = moment('1921-06-28');
      const y = moment('2020-07-28');

      const diff = since(x, y);

      expect(diff).toEqual('99 years ago');
    });
  });
  describe('months', () => {
    test(`'1 month ago' given same date from previous month`, () => {
      const x = moment('2020-06-28');
      const y = moment('2020-07-28');

      const diff = since(x, y);

      expect(diff).toEqual('1 month ago');
    });
    test(`'1 month ago' given date just over one month ago`, () => {
      const x = moment('2020-06-27');
      const y = moment('2020-07-28');

      const diff = since(x, y);

      expect(diff).toEqual('1 month ago');
    });
    test(`'2 months ago' given date just over two months ago`, () => {
      const x = moment('2020-05-27');
      const y = moment('2020-07-28');

      const diff = since(x, y);

      expect(diff).toEqual('2 months ago');
    });
    test(`'11 months ago' given date just under one year ago`, () => {
      const x = moment('2019-08-27');
      const y = moment('2020-07-28');

      const diff = since(x, y);

      expect(diff).toEqual('11 months ago');
    });
  });
  describe('weeks', () => {
    test(`'1 week ago' given date just over one week ago`, () => {
      const x = moment('2020-07-20');
      const y = moment('2020-07-28');

      const diff = since(x, y);

      expect(diff).toEqual('1 week ago');
    });
    test(`'2 weeks ago' given date just over two weeks ago`, () => {
      const x = moment('2020-07-13');
      const y = moment('2020-07-28');

      const diff = since(x, y);

      expect(diff).toEqual('2 weeks ago');
    });
    test(`'4 weeks ago' given date just under one month ago`, () => {
      const x = moment('2020-06-29');
      const y = moment('2020-07-28');

      const diff = since(x, y);

      expect(diff).toEqual('4 weeks ago');
    });
  });
  describe('days', () => {
    test(`'1 day ago' given date just over one day ago`, () => {
      const x = moment('2020-07-28T09:00:00.000Z');
      const y = moment('2020-07-29T10:00:00.000Z');

      const diff = since(x, y);

      expect(diff).toEqual('1 day ago');
    });
    test(`'2 days ago' given date just over two days ago`, () => {
      const x = moment('2020-07-27T09:00:00.000Z');
      const y = moment('2020-07-29T10:00:00.000Z');

      const diff = since(x, y);

      expect(diff).toEqual('2 days ago');
    });
    test(`'6 days ago' given date just under one week ago`, () => {
      const x = moment('2020-07-23T09:00:00.000Z');
      const y = moment('2020-07-29T10:00:00.000Z');

      const diff = since(x, y);

      expect(diff).toEqual('6 days ago');
    });
  });
  describe('hours', () => {
    test(`'1 hour ago' given date just over one hour ago`, () => {
      const x = moment('2020-07-29T08:59:00.000Z');
      const y = moment('2020-07-29T10:00:00.000Z');

      const diff = since(x, y);

      expect(diff).toEqual('1 hour ago');
    });
    test(`'2 hours ago' given date just over two hours ago`, () => {
      const x = moment('2020-07-29T07:59:00.000Z');
      const y = moment('2020-07-29T10:00:00.000Z');

      const diff = since(x, y);

      expect(diff).toEqual('2 hours ago');
    });
    test(`'23 hours ago' given date just under one day ago`, () => {
      const x = moment('2020-07-29T00:58:00.000Z');
      const y = moment('2020-07-29T23:59:00.000Z');

      const diff = since(x, y);

      expect(diff).toEqual('23 hours ago');
    });
    test(`'6 hours ago' given date 6 hours ago but spanning midnight`, () => {
      const x = moment('2020-07-28T20:58:00.000Z');
      const y = moment('2020-07-29T03:00:00.000Z');

      const diff = since(x, y);

      expect(diff).toEqual('6 hours ago');
    });
  });
  describe('minutes', () => {
    test(`'1 minute ago' given date just over one minute ago`, () => {
      const x = moment('2020-07-29T20:08:59.000Z');
      const y = moment('2020-07-29T20:10:00.000Z');

      const diff = since(x, y);

      expect(diff).toEqual('1 minute ago');
    });
    test(`'2 minutes ago' given date just over two minutes ago`, () => {
      const x = moment('2020-07-29T20:07:59.000Z');
      const y = moment('2020-07-29T20:10:00.000Z');

      const diff = since(x, y);

      expect(diff).toEqual('2 minutes ago');
    });
    test(`'59 minutes ago' given date just under one hour ago`, () => {
      const x = moment('2020-07-29T20:00:00.000Z');
      const y = moment('2020-07-29T20:59:59.000Z');

      const diff = since(x, y);

      expect(diff).toEqual('59 minutes ago');
    });
  });
  describe('seconds', () => {
    const ranges: Options['ranges'] = ['year', 'month', 'week', 'day', 'hour', 'minute', 'second'];
    test(`'1 second ago' given date just over one second ago`, () => {
      const x = moment('2020-07-29T20:10:08.900Z');
      const y = moment('2020-07-29T20:10:10.000Z');

      const diff = since(x, y, { ranges });

      expect(diff).toEqual('1 second ago');
    });
    test(`'2 seconds ago' given date just over two seconds ago`, () => {
      const x = moment('2020-07-29T20:10:07.900Z');
      const y = moment('2020-07-29T20:10:10.000Z');

      const diff = since(x, y, { ranges });

      expect(diff).toEqual('2 seconds ago');
    });
    test(`'59 seconds ago' given date just under one minute ago`, () => {
      const x = moment('2020-07-29T20:10:00.000Z');
      const y = moment('2020-07-29T20:10:59.900Z');

      const diff = since(x, y, { ranges });

      expect(diff).toEqual('59 seconds ago');
    });
  });
  describe('from now', () => {
    test(`anything given only one parameter`, () => {
      const y = moment();
      const x = moment(y).subtract(2, 'days');

      const diff = since(x, y);

      expect(diff).toEqual('2 days ago');
    });
    test(`works with strings`, () => {
      const y = moment();
      const x = moment(y).subtract(2, 'days');

      const diff = since(x.format(), y.format());

      expect(diff).toEqual('2 days ago');
    });
  });
  describe('readme examples', () => {
    const now = '2020-01-01';
    test(`'1 year ago'`, () => {
      const diff = since('2018-06-15', now);

      expect(diff).toEqual('1 year ago');
    });
    test(`'6 months ago'`, () => {
      const diff = since('2019-06-15', now);

      expect(diff).toEqual('6 months ago');
    });
    test(`'15 minutes ago'`, () => {
      const diff = since('2019-12-31T23:44:52', now);

      expect(diff).toEqual('15 minutes ago');
    });
    test(`'just now'`, () => {
      const diff = since('2019-12-31T23:59:43.035', now);

      expect(diff).toEqual('Just now');
    });
    test(`'6 months ago'`, () => {
      const diff = since('2018-06-15', '2019-01-01');

      expect(diff).toEqual('6 months ago');
    });
    test(`'custom ranges'`, () => {
      const ranges: Range[] = ['month', 'day', 'minute'];

      const monthsSince = since('2018-06-15', '2020-01-01', { ranges });
      const daysSince = since('2019-12-09', '2020-01-01', { ranges });
      const minutesSince = since('2019-12-31T22:14:00', '2020-01-01', { ranges });
      const justNow = since('2019-12-31T23:59:43.035', '2020-01-01', { ranges });

      expect(monthsSince).toEqual('18 months ago');
      expect(daysSince).toEqual('23 days ago');
      expect(minutesSince).toEqual('106 minutes ago');
      expect(justNow).toEqual('Just now');
    });
  });
});
