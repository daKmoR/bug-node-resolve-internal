# Reproduction for no internal resolve in @web/dev-server

Having in my `package.json`

```js
"scripts": {
  "start": "web-dev-server --node-resolve --open"
},
"imports": {
  "#internal": "./internal.js"
},
```

Usage

```js
import { foo } from "#internal";

console.log(foo);
```

### Expected Behavior

Be able to import `#internal`.

### Actual Behavior

Throws Error

```
Error while transforming app.js: Could not resolve import "#internal".

> 1 | import { foo } from '#internal';
    |                     ^
```

## NOTE:

This works fine when using rollup directly and it produces the following output:

```js
"use strict";

const foo = "foo";

console.log(foo);
```
