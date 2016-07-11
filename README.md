# Detect Hover
<!-- todo: add links, add info about hover media queries -->
JavaScript wrapper for `hover` and `any-hover` media queries.

[Live detection test](todo) &#8212; [view on npm](todo)

Exports a reference to a singleton object (a micro state machine with an update function) with its state set to the results of the `hover` and `any-hover` media queries, as well as an `update()` function which re-runs the tests and updates the object's state.

*Note that `detect-hover` is one of the micro state machines used by [`detect-it`](todo) to determine if a device is `mouseOnly`, `touchOnly`, or `hybrid`.*

## `detectHover` micro state machine
```javascript
const detectHover = {
  // mutually exclusive (only one will be true)
  hover: boolean,
  none: boolean,
  onDemand: boolean,

  // not mutually exclusive
  anyHover: boolean,
  anyNone: boolean,
  anyOnDemand: boolean,

  // re-run all the detection tests and update state
  update()
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
 if (detectHover.hover) {
  // primary pointing device can hover
} else {
  // primary pointing device cannot hover
}

// updating the state
detectHover.update();
```
Note that the `update()` function is run once at the time of import to set the object's initial state. If it doesn't have access to the `window` or the browser doesn't support the `matchMedia()` function (all modern browser do), then the state will be `undefined` (`detect-hover` will not throw an error).  

If `detect-hover` doesn't have access to the `window` at the time of import, you will have to call the `update()` function manually at a later time to update its state.

Note that the `onDemand` and `anyOnDemand` properties are pretty much useless for practical purposes and have been removed from the [July 6th 2016 W3C Media Queries Level 4](todo) draft specification, but were included in the [previous draft (January 26th 2016)](todo) of the spec. Note that all Android touch only devices register that they can hover `onDemand`, which is achieved via a long press - I view this as a feature that is a bug.

## Part of the [`detect-it`](todo) family
- [`detect-it`](todo)
  - **`detect-hover`**
  - [`detect-pointer`](todo)
  - [`detect-touch-events`](todo)
  - [`detect-pointer-events`](todo)
