### Check if that shit's an ES6 Set, baby.

``` javascript
const _isSet = require('hodash.isset');
const set = new Set();
const notSet = {};
const dolphinatelyNotSet = null;

_isSet(set); // true
_isSet(notSet); // false
_isSet(dolphinatelyNotSet); // false
```