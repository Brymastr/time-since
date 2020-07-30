# time-since

Show the time since a given date in the largest units possible.

## Installation

```console
$ npm i time-since
```

```javascript
// index.js
const since = require('time-since');

// index.ts
import since from 'time-since';
```

## Usage

Given a date, either a string or a Moment, `since` will return a human friendly date or time difference. The unit of time changes automatically to be the most sensible.

```javascript
// Example: if `since` was run at 2020-01-01T00:00:00.000Z

const yearsSince = since('2018-06-01');
// => '1 year ago'

const monthsSince = since('2019-06-01');
// => '6 months ago'

const minutesSince = since('2019-12-31T23:44:52');
// => '15 minutes ago'

const justNow = since('2019-12-31T23:59:43.035');
// => 'Just now'
```

A static date to compare against can be provided as an optional parameter:

```javascript
const timeSince = since('2018-06-15', '2019-01-01');
// => '6 months ago'
```

Date parameters can be passed in as any of string, Moment, or Date

```javascript
// Example: if `since` was run at 2020-01-01T00:00:00.000Z
//   These invocations will all return '6 months ago'

since('2020-06-02');

since('2020-06-02T12:43:51.873');

since(moment('2020-06-02'));

since(new Date('2020-06-02'));
```

## Options

### `ranges`

The default date diff ranges are:

- `year`
- `month`
- `week`
- `day`
- `hour`
- `minute`

The complete list of available date ranges is the default list above plus the `second` option

To specify a custom set of range units:

```javascript
const ranges = ['month', 'day', 'minute'];

const monthsSince = since('2018-06-15', '2020-01-01', { ranges });
// => '18 months ago'

const daysSince = since('2019-12-09', '2020-01-01', { ranges });
// => '23 days ago'

const minutesSince = since('2019-12-31T22:14:00', '2020-01-01', { ranges });
// => '106 minutes ago'
```

## TODO:

- [x] Tests
- [x] Examples
- [x] Optional diff ranges
- [ ] Drop moment as dependency
- [ ] Localization
- [ ] Option for words v. numbers (2 days ago v. Two days ago)
- [ ] Round numbers up if they're close to the next unit (57 seconds becomes 1 minute)
- [ ] Option to choose finest granularity ("Less than a minute ago" or "Just now" when less than an hour ago)
- [ ] npm listing
