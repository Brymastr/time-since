import moment from 'moment';
import since from './index';

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
    test.todo(`'1 hour ago' given date just over one hour ago`);
    test.todo(`'2 hours ago' given date just over two hours ago`);
    test.todo(`'23 hours ago' given date just under one day ago`);
    test.todo(`'6 hours ago' given date 6 hours ago but spanning midnight`);
  });
  describe('minutes', () => {
    test.todo(`'1 minute ago' given date just over one minute ago`);
    test.todo(`'2 minutes ago' given date just over two minutes ago`);
    test.todo(`'59 minutes ago' given date just under one hour ago`);
  });
  describe('seconds', () => {
    test.todo(`'1 second ago' given date just over one second ago`);
    test.todo(`'2 seconds ago' given date just over two seconds ago`);
    test.todo(`'59 seconds ago' given date just under one minute ago`);
  });
  describe('from now', () => {
    test.todo(`anything given only one parameter`);
  });
});
