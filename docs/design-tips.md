# Design Tips

## Shadows

* When using `filter:drop-shadow()` or `box-shadow` avoid using a border for cleaner edges. When the background colour of inside and outside the box are both white or very light, the shadow needs to be of sufficient darkness to make a clear distinction of the edges.
* Use `filter:drop-shadow()` over `box-shadow` as the prior can be rendered with hardware acceleration. A big caveat here is older browsers which don't support hardware rendering for `filter:drop-shadow()` will use software rendering leading to very poor performance and/or an incorrect appearance.
* `filter:drop-shadow()` can't accept a 4th `<spread-radius>` value on webkit/blink browsers. See <https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/drop-shadow>.
