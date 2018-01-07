<!-- markdownlint-disable MD029 -->

# @wearegenki/vue-directive-view

## Overview

A very simple Vue custom directive to show or hide an element. It's a simpler alternative to using Vue' native `v-show`.

_NOTE: This plugin is a dependency a some of the [@wearegenki/ui](https://www.npmjs.com/package/@wearegenki/ui) vue components and is required for them to work correctly._

### Differences to `v-show`

* Only adds or removes a class.
* Doesn't trigger `<transition>` animations.

## Usage

1. Install

```shell
yarn add @wearegenki/vue-directive-view
```

2. Register

```javascript
import Vue from 'vue';
import vView from '@wearegenki/vue-directive-view';
import App from './App';

// register the custom directive
Vue.use(vView);

new Vue({
  el: '#app',
  render: h => h(App),
});
```

\+ if you arn't using [@wearegenki/css](https://www.npmjs.com/package/@wearegenki/ui) you'll also need to add CSS styles to handle the visibility, e.g.:

```css
.hide {
  pointer-events: none;
  opacity: 0;
}
```

3. Use in component templates

```html
<div v-view="toggle">Hidden element</div>
```

### Options

The following options are available when registering the plugin:

_NOTE: The default options are required for compatibility with @wearegenki/ui vue components._

| Option | Default | Type | Description |
| --- | --- | --- | --- |
| name | `'view'` | `<String>` | The directive property name, e.g. the default = `v-view`. |
| class | `'hide'` | `<String>` | The name of the class which is added and removed. |

Example:

```javascript
...

Vue.use(vView, {
  name: 'view',
  class: 'hide',
});

...
```

-----

© 2018 [We Are Genki](https://wearegenki.com)