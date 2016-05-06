# jQuery Panzoom

[![Build Status](https://travis-ci.org/timmywil/jquery.panzoom.png?branch=master)](https://travis-ci.org/timmywil/jquery.panzoom)

Panzoom is a progressive plugin to create panning and zooming functionality for an element. Panzoom supports the same browsers as jQuery 2.0 and can be used with jQuery 1.9.0+ or jQuery 2.0+.
Rather than setting width and height on an image tag, Panzoom uses CSS transforms and matrix functions to take advantage of hardware/GPU acceleration in the browser, which means the element can be _anything_: an image, a video, an iframe, a canvas, text, WHATEVER.
And although IE<=8 is not supported, this plugin is future-proof.

jquery.panzoom.min.js (11.2kb/4.2kb gzip), included in this repo, is compressed with [uglifyjs](https://github.com/mishoo/UglifyJS).

[Download v1.8.6](https://raw.github.com/timmywil/jquery.panzoom/1.8.5/dist/jquery.panzoom.min.js)  
[Development version](https://raw.github.com/timmywil/jquery.panzoom/1.8.5/dist/jquery.panzoom.js)

For common support questions, see [the FAQ](https://github.com/timmywil/jquery.panzoom#faq) at the bottom.

## Mobile support

Panzoom includes support for touch gestures and even supports __pinch gestures__ for zooming.
It is perfectly suited for both mobile and desktop browsers.
You'll be amazed at how well this performs on your mobile device.

iOS and Android are supported.

_Also note that devices that support both touch and mouse events at the same time (such as a laptop with a touch screen) are also supported._

## SVG support

Panzoom supports panning and zooming SVG elements directly, in browsers that support SVG.

## Dependencies

As of v1.1.0, Panzoom no longer depends on [Modernizr](http://modernizr.com/) for anything. Just jQuery.
Before v1.1.0, this plugin depended on Modernizr for its touch support feature detect.

## Loading Panzoom
Panzoom can obviously be included with your scripts at the end of the body,
but Panzoom supports AMD for javascript module love.

With script tags:

```html
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
<script src="/js/plugins/jquery.panzoom.js"></script>
```

With AMD loader in an anonymous module:

```js
define([ "jquery", "plugins/jquery.panzoom" ], function( $ ) {
  $(document).ready(function() {
    $(".panzoom-elements").panzoom();
  });
});
```

## Initialization

```js
$(".panzoom-elements").panzoom();

// Pass options
$("a.panzoom-elements").panzoom({
  minScale: 0,
  $zoomRange: $("input[type='range']")
});
```

## Options

All options can be overridden by passing an object literal like any other plugin,<br>
or with the `"option"` method.<br>

Check out the demos of the [contain](http://timmywil.github.io/jquery.panzoom/demo/#contain) and [inverted containment](http://timmywil.github.io/jquery.panzoom/demo/#inverted-contain) options.

```js
Panzoom.defaults = {
  // Should always be non-empty
  // Used to bind jQuery events without collisions
  // A guid is not added here as different instantiations/versions of panzoom
  // on the same element is not supported.
  eventNamespace: ".panzoom",

  // Whether or not to transition the scale
  transition: true,

  // Default cursor style for the element
  cursor: "move",

  // There may be some use cases for zooming without panning or vice versa
  // NOTE: disablePan also disables focal point zooming
  disablePan: false,
  disableZoom: false,

  // The increment at which to zoom
  // adds/subtracts to the scale each time zoomIn/Out is called
  increment: 0.3,

  minScale: 0.4,
  maxScale: 5,

  // The default step for the range input
  // Precendence: default < HTML attribute < option setting
  rangeStep: 0.05,

  // Animation duration (ms)
  duration: 200,
  // CSS easing used for scale transition
  easing: "ease-in-out",

  // Indicate that the element should be contained within it's parent when panning
  // Note: this does not affect zooming outside of the parent
  // Set this value to 'invert' to only allow panning outside of the parent element (basically the opposite of the normal use of contain)
  // 'invert' is useful for a large panzoom element where you don't want to show anything behind it
  contain: false,

  // Transform value to which to always reset (string)
  // Defaults to the original transform on the element when panzoom is initialized
  startTransform: undefined,

  // Zoom buttons/links collection (you can also bind these yourself - e.g. `$button.on("click", function( e ) { e.preventDefault(); $elem.panzoom("zoomIn"); });` )
  $zoomIn: $(),
  $zoomOut: $(),
  // Range input on which to bind zooming functionality
  $zoomRange: $(),
  // Reset buttons/links collection on which to bind the reset method
  $reset: $(),
  // For convenience, these options will be bound to panzoom events
  // These can all be bound normally on the panzoom element
  // e.g. `$elem.on("panzoomend", function( e, panzoom ) { console.log( panzoom.getMatrix() ); });`
  onStart: undefined,
  onChange: undefined,
  onZoom: undefined,
  onPan: undefined,
  onEnd: undefined,
  onReset: undefined
};
```

## Methods

Methods can be called in the same way as a widget from the jQuery UI widget factory. Pass a method name when calling panzoom. Strings are interpreted as method names.

### `option()`

```js
// One at a time
// Sets the scale increment option
$elem.panzoom("option", "increment", 0.4);

// Several options at once
$elem.panzoom("option", {
  increment: 0.4,
  minScale: 0.1,
  maxScale: 2,
  duration: 500,
  $reset: $("a.reset-panzoom, button.reset-panzoom")
});
```

Any option can be changed. See the defaults above for a list.

### `reset( [options] )`

__Arguments__

  1. `options` _{Object|Boolean}_: If a boolean is passed, animate the reset (default: true). If an options object is passed, simply pass that along to setMatrix.
  2. `options.silent` _{Boolean}_: Silence the reset event (as well as the change event as the same options are passed to setMatrix)

```js
$elem.panzoom("reset");
$elem.panzoom("reset", false);
$elem.panzoom("reset", {
  animate: false,
  contain: false
});
```

Reset the transform matrix to its original value. All panning and zooming is reset.

### `resetZoom( [options] )`

__Arguments__

  1. `options` _{Object|Boolean}_: If a boolean is passed, animate the reset (default: true). If an options object is passed, simply pass that along to zoom.

```js
$elem.panzoom("resetZoom");
$elem.panzoom("resetZoom", false);
$elem.panzoom("resetZoom", {
  animate: false,
  silent: true
});
```

Reset the scale to its original value (resets both scale values in the matrix to their original values).

### `resetPan( [options] )`

__Arguments__

  1. `options` _{Object|Boolean}_: If a boolean is passed, animate the reset (default: true). If an options object is passed, simply pass that along to pan.

```js
$elem.panzoom("resetPan");
$elem.panzoom("resetPan", false);
$elem.panzoom("resetPan", {
  animate: false,
  silent: true
});
```

Reset the pan to its original value.

### `pan( x, y[, options] )`

__Arguments__

  1. `x` _{Number}_: The translation X value to set
  2. `y` _{Number}_: The translation Y value to set
  3. `options` _{Object}_: These options are also passed along to [setMatrix](#setmatrix-matrix-options-).

    1. `options.matrix` _{Array}_: The matrix being manipulated (If this is not passed, the matrix will be calculated on every call to pan, which could be a performance bottleneck if this is bound to a move event)
    2. `options.silent` _{Boolean}_: Silence the pan event. Note that this will also silence the setMatrix change event.
    3. `options.relative` _{Boolean}_: Make the x and y values relative to the existing matrix.<br/>
      e.g. `$elem.panzoom("pan", 10, -10, { relative: true });`<br/>
      `// => Moves the element 10 pixels right and 10 pixels up from its current position`

### `zoom( [scale[, opts]] )`

__Arguments__

  1. `scale` _{Number|Boolean}_: The exact scale to which to zoom or a boolean indicating to transition a zoom out
  2. `opts` _{Object}_: All global options can be overwritten by this options object. For example, override the default increment.

    1. `opts.noSetRange` _{Boolean}_: Specify that the method should not set the $zoomRange value (as is the case when $zoomRange is calling zoom on change)
    2. `opts.animate` _{Boolean}_: Whether to animate the zoom (defaults to true if scale is not a number, false otherwise)
    3. `opts.focal` _{jQuery.Event|Object}_: Specify a focal point under which to freeze the zooming element.<br/>
      Should either be a jQuery event or an object containing clientX/clientY to specify the point's position relative to the parent.<br/>
      For an example of focal point zooming, use the mousewheel or pinch to zoom on the [demo](http://timmywil.github.io/jquery.panzoom/demo/#focal).
    4. `opts.silent` _{Boolean}_: Silence the zoom event
    5. `opts.dValue` _{Number}_: Think of a transform matrix as four values a, b, c, d<br/>
      where a/d are the horizontal/vertical scale values and b/c are the skew values<br/>
      (5 and 6 of matrix array are the tx/ty transform values).<br/>
      Normally, the scale is set to both the a and d values of the matrix.<br/>
      This option allows you to specify a different d value for the zoom.<br/>
      For instance, to flip vertically, you could set -1 as the dValue.

```js
// Transition a zoom in based on the scale increment, min and max values
$elem.panzoom("zoom");

// Transition a zoom out
$elem.panzoom("zoom", true);

// Set the scale immediately without a transition
// and silence the zoom event
$elem.panzoom("zoom", 1.2, { silent: true });
```

Transition a zoom in based on the scale increment, min and max values, and animation duration and easing. This method handles both zooming in and zooming out.<br>
If the method is passed a number, `zoom()` will immediately set that scale without transitioning. This is mostly useful for the range input and pinch gestures.<br>
If the method is passed a boolean, true will indicate to perform a zoom-out based on the increment specified in options. If false (or omitted), a zoom-in will be performed.

### `resetDimensions()`

```js
// Indicate to panzoom that the dimensions of the parent and/or the element have changed.
$elem.panzoom("resetDimensions");
```

Panzoom caches the dimensions of the panzoom element and its parent to cater to quick move events. Whenever these dimensions change, it is necessary to call `resetDimensions()`.

### `disable()`

```js
$elem.panzoom("disable");
```

Quickly disable panzoom on the element.

### `enable()`

```js
$elem.panzoom("enable");
```

Re-enable panzoom on the element (re-binds all events).

### `isDisabled()`

```js
$elem.panzoom("isDisabled");
// => true
```

Returns a boolean indicating whether the current Panzoom instance is disabled.

### `isPanning()`

Returns a boolean indicating whether the element is currently panning.

### `destroy()`

```js
$elem.panzoom("destroy");
```

### `instance()`

```js
var panzoom = $elem.panzoom("instance");
```

Retrieves the Panzoom instance(s) from the set. If there are multiple elements in the set, you will get an array of instances. If there is only one, you will just get that instance of Panzoom.

Unbinds all events and removes all data, including the Panzoom instance on the element.

## Internal

These methods are _basically_ private, but could be useful under certain circumstances.

### `getTransform()`

Returns the string transform value used by panzoom for the element.

__Note__: The transform attribute is used for SVG. Otherwise, the appropriately prefixed transform style property is used.

### `getMatrix( [transform] )`

Retrieve an array of values for the specified transform or for the current transform on the panzoom element.

```js
$elem.panzoom("getMatrix");
// => [1, 0, 0, 1, 0, 0]
```

### `setMatrix( matrix[, options] )`

__Arguments__

  1. `matrix` _{Array}_: Matrix to set
  2. `options` _{Object}_

    1. `options.animate` _{Boolean}_: If true, a transition will be set to animate the transform change
    2. `options.contain` _{Boolean}_: Override the global contain option
    3. `options.range` _{Boolean}_: If true, $zoomRange's value will be updated.
    4. `options.silent` _{Boolean}_: If true, the change event will not be triggered


```js
// Flip the element upside down
$elem.panzoom("setMatrix", [ 1, 0, 0, -1, 0, 0 ]);
```

Sets the transform matrix of the panzoom element. It accepts the matrix as an array.

_Note_: `setMatrix()` does not chain. It returns the newly-set matrix as an _Array_.

### `transition( [off] )`

```js
$elem.panzoom("transition");
// Turn off transition
$elem.panzoom("transition", true);
// Note: this is different than...
$elem.panzoom("option", "transition", true);
// ... which just sets the `transition` option, indicating whether transitioning is allowed at all.
// If the transition option is false, `$elem.panzoom("transition")` will only ever set transition to "none".
```

Applies the transition to the element. If `off` is true, it removes the transition.


## Events

### `"panzoomstart"`

__Arguments Received__

  1. `e` _(jQuery.Event)_: jQuery event object
  2. `panzoom` _(Panzoom)_: The panzoom instance
  3. `event` _(jQuery.Event)_: The starting mousedown or touchstart event
  4. `touches` _(TouchList)_: The touches list if present

Fired when the user starts a move or pinch zoom gesture on mobile.

### `"panzoomchange"`

__Arguments Received__

  1. `e` _(jQuery.Event)_: jQuery event object
  2. `panzoom` _(Panzoom)_: The panzoom instance
  3. `transform` _(Array)_: The transform matrix set during the change as an array of values

Fired whenever the matrix is changed by `setMatrix()` (whether internally or externally).

_Try not to put to much in this event as it could slow down dragging._

__Note__: This event can be silenced when setMatrix is called directly.

### `"panzoomzoom"`

__Arguments Received__

  1. `e` _(jQuery.Event)_: jQuery event object
  2. `panzoom` _(Panzoom)_: The panzoom instance
  3. `scale` _(Number)_: The zoom scale set by the plugin
  4. `opts` _(Object)_: Same options passed to zoom

Fired whenever the zoom is changed by this plugin.

__Note__: This event can be silenced when zoom is called directly.

### `"panzoompan"`

__Arguments Received__

  1. `e` _(jQuery.Event)_: jQuery event object
  2. `panzoom` _(Panzoom)_: The panzoom instance
  3. `x` _(Number)_: The resulting translateX value set on the matrix (accounting for the relative option)
  4. `y` _(Number)_: The resulting translateY value set on the matrix

Fired whenever the pan is changed by this plugin.

_Try not to put to much in this event as it could slow down dragging._

### `"panzoomend"`

__Arguments Received__

  1. `e` _(jQuery.Event)_: jQuery event object
  2. `panzoom` _(Panzoom)_: The panzoom instance
  3. `matrix` _(Array)_: The final transform matrix
  4. `changed` _(Boolean)_: Whether the matrix changed during the panzoom event

This event is fired when the user finishes a move or finishes a pinch zoom gesture on mobile. All properties from the original click or touch event that ended the panzoom transaction are passed through, including the event target (`e.target`).

*Note*: When binding to this event, you can tell the difference between a click (or tap) and a move by checking `changed`:

```js
$panzoom.on('panzoomend', function(e, panzoom, matrix, changed) {
  if (changed) {
    // deal with drags or touch moves
  } else {
    // deal with clicks or taps
  }
});
```

### `"panzoomreset"`

__Arguments Received__

  1. `e` _(jQuery.Event)_: jQuery event object
  2. `panzoom` _(Panzoom)_: The panzoom instance
  3. `matrix` _(Array)_: The original matrix

Fired whenever reset is called.

## Testing

Tests can be run by opening [test/index.html](http://timmywil.github.io/jquery.panzoom/test/) in a browser or by using [`grunt`](http://gruntjs.com/) and [phantomjs](http://phantomjs.org/).

Tests are written with [mocha](http://visionmedia.github.com/mocha/) and [chai for bdd-style assertions](http://chaijs.com/api/bdd/).

See [CONTRIBUTING.md](https://github.com/timmywil/jquery.panzoom/blob/master/CONTRIBUTING.md) for more info.


## FAQ

1\. How do I make it so that I never see the background behind the panzoom element? [example](http://codepen.io/timmywil/pen/qjvBF)

  - This can be done with the `contain` option. Set `contain` to `"invert"` and make sure the panzoom element is the same size or larger than its parent.

```js
  $('.panzoom-elements').panzoom({
    contain: 'invert',
    minScale: 1
  });
```

2\. How do I make links work if they're within a panzoom element? [example](http://codepen.io/timmywil/pen/bFiqy)

  - Event propagation is stopped for `mousedown` and `touchstart` events in order to allow for panzoom elements within panzoom elements. To fix the links, bind an event handler that prevents the event from reaching the panzoom handler:

```js
$('.panzoom a').on('mousedown touchstart', function( e ) {
  e.stopImmediatePropagation();
});
```
