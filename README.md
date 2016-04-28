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

build
-----

[![Build Status](https://travis-ci.org/skapoor/merge-yaml.svg?branch=master)](https://travis-ci.org/skapoor/merge-yaml)
