# pretty-jcal

## Introduction

[RFC7265](https://tools.ietf.org/html/rfc7265) JSON Format for iCalendar (jCal) is a great to handle iCalendar content in Javascript.

This repo provide a JSON format converter to allow 2-way-convert between the prettyJCAL and jCal.

## Installation

```bash
yarn add pretty-jcal
```

or

```bash
npm i pretty-jcal
```

## Reason

When dealing with iCalendar(ics) files, we often want a js object representation of the ical object. It's natural for us to use jCal. However, there's a problem.

Example jCal JSON:

```json
[
  "vcalendar",
  [
    ["calscale", {}, "text", "GREGORIAN"],
    ["prodid", {}, "text", "-//Example Inc.//Example Calendar//EN"],
    ["version", {}, "text", "2.0"]
  ],
  [
    [
      "vevent",
      [
        ["dtstamp", {}, "date-time", "2008-02-05T19:12:24Z"],
        ["dtstart", {}, "date", "2008-10-06"],
        ["summary", {}, "text", "Planning meeting"],
        ["uid", {}, "text", "4088E990AD89CB3DBB484909"]
      ],
      []
    ]
  ]
]
```

While it's compact and efficient, you cannot figure out what is what and you would end up writing code like: `calendar[1][2][3] + component[2][3]` which is borderline unreadable and unmaintainable.

## Solution

We can transform the jCal JSON to make it more like a `normal` JSON, while it's more verbose, it's much easier to write readable and maintainable code.

Example PrettyJCAL JSON:

```json
{
  "name": "vcalendar",
  "properties": [
    {
      "name": "calscale",
      "type": "text",
      "value": "GREGORIAN"
    },
    {
      "name": "prodid",
      "type": "text",
      "value": "-//Example Inc.//Example Calendar//EN"
    },
    {
      "name": "version",
      "type": "text",
      "value": "2.0"
    }
  ],
  "components": [
    {
      "name": "vevent",
      "properties": [
        {
          "name": "dtstamp",
          "type": "date-time",
          "value": "2008-02-05T19:12:24Z"
        },
        {
          "name": "dtstart",
          "type": "date",
          "value": "2008-10-06"
        },
        {
          "name": "summary",
          "type": "text",
          "value": "Planning meeting"
        },
        {
          "name": "uid",
          "type": "text",
          "value": "4088E990AD89CB3DBB484909"
        }
      ],
      "components": []
    }
  ]
}
```

## Features

- Readable JSON format with full information about each node, follows JSON convention which only use array when there's multiple objects of same type.
- jCal PrettyJCAL 2-way-convert, with no loss in information.
- Built-in Typescript typings, make sure your code strongly typed and safe.

## Usage

##### Caveat

The typescript typing does not verify against jCal standard, it's up to user to make sure only valid properties and components were used.

| Function name   | Parameter type          | Return value type       | Description                                     |
| --------------- | ----------------------- | ----------------------- | ----------------------------------------------- |
| jcal2prettyJCAL | JCALComponentNode       | PrettyJCALComponentNode | Convert standard jCal to prettyJCAL JSON format |
| prettyJCAL2jcal | PrettyJCALComponentNode | JCALComponentNode       | Convert prettyJCAL JSON format to standard jCal |

### JCALComponentNode (Array type)

| Property | Description          |
| -------- | -------------------- |
| 0        | Component name       |
| 1        | Component properties |
| 2        | Children components  |

### JCALPropertyNode (Array type)

| Property | Description                 |
| -------- | --------------------------- |
| 0        | name of the property        |
| 1        | parameters of this property |
| 2        | type of the property value  |
| 3        | property value              |

### PrettyJCALComponentNode (Object type)

| Property   | Description          |
| ---------- | -------------------- |
| Name       | Component name       |
| properties | Component properties |
| components | Children components  |

### PrettyJCALPropertyNode (Object type)

| Property   | Description                 |
| ---------- | --------------------------- |
| name       | name of the property        |
| parameters | parameters of this property |
| type       | type of the property value  |
| value      | property value              |

## License

MIT
