# Design Tips

* Use `filter:drop-shadow()` over `box-shadow` as the prior _can_ be rendered with hardware acceleration. A big caveat here is older browsers which don't support hardware rendering for `filter:drop-shadow()` will use software rendering leading to poor performance, especially when scrolling or when layers overlap.
* When using `filter:drop-shadow()` or `box-shadow` avoid using a border for cleaner edges. When the background colour of inside and outside the box are both white or very light, the shadow needs to be of sufficient darkness to make a clear distinction of the edges.
