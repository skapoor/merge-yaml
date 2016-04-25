This is thin wrapper utility over js-yaml which will merge the multiple yaml fles
and safeload them and return the parsed yml.

#Usage

```js
var mergeYaml = require('merge-yaml');

mergeYaml([
    'first.yml',
    'second.yml'
]);

````
