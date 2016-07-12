# Detect Hover

JavaScript wrapper for `hover` and `any-hover` media queries.

[Live detection test](todo) &#8212; [view on npm](todo)

Exports a reference to a singleton object (a micro state machine with an update function) with its state set to the results of the `hover` and `any-hover` media queries, as well as an `update()` function which re-runs the tests and updates the object's state.

For more information on the `hover` and `any-hover` media queries, please see the [W3C Media Queries Level 4 specification](todo). For information on browser compatibility, please see [Can I Use matchMedia](todo).

*`detect-hover` is one of the micro state machines used by [`detect-it`](todo) to determine if a device is `mouseOnly`, `touchOnly`, or `hybrid`.*

## `detectHover` micro state machine
```javascript
const detectHover = {
  // mutually exclusive (only one will be true)
  hover: boolean,
  none: boolean,

  // not mutually exclusive
  anyHover: boolean,
  anyNone: boolean,

  // re-run all the detection tests and update state
  update() {...}
}
```

## Installing `detect-hover`
```terminal
$ npm install detect-hover
```

## Importing `detect-hover`
```javascript
import detectHover from 'detect-hover';
```


## Using `detect-hover`
```javascript
// using the state
detectHover.hover === true; // primary pointing system can easily hover
detectHover.none === true; // primary pointing system can’t hover, or there is no pointing system

/*
 * identical to the pointer and hover media features, but they correspond to the
 * union of capabilities of all the pointing devices available to the user -
 * more than one of their values can be true, if different pointing devices have
 * different characteristics
 */
detectHover.anyHover === true; // any pointing system can easily hover
detectHover.anyNone === true; // any pointing system can’t hover


// updating the state - most apps won't need to use this at all
detectHover.update();
```
Note that the `update()` function is run once at the time of import to set the object's initial state, and generally doesn't need to be run again. If it doesn't have access to the `window` or the browser doesn't support the `matchMedia()` function (all modern browser do), then the state will be `undefined` (`detect-hover` will not throw an error). If `detect-hover` doesn't have access to the `window` at the time of import, you will have to call the `update()` function manually at a later time to update its state.

Note that the hover on-demand value was removed from the [July 6th 2016 W3C Media Queries Level 4](todo) draft specification, but was included in the [previous draft (January 26th 2016)](todo) of the spec. Any device that registers as having hover on-demand capabilities will show up as hover `none` in `detectHover`'s state. As a side note, hover on-demand is pretty much useless for practical purposes, and Android touch only devices register that they can hover on-demand, which is achieved via a long press - I view this as a feature that is a bug.

## Part of the [`detect-it`](todo) family
- [`detect-it`](todo)
  - **`detect-hover`**
  - [`detect-pointer`](todo)
  - [`detect-touch-events`](todo)
  - [`detect-pointer-events`](todo)
