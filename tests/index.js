/* global describe, it */
'use strict';

var chai = require('chai'),
    assert = chai.assert,
    mergeYaml = require('../index.js');

describe('merge-yaml', function () {

    it('should return a function.', function () {
        assert.isFunction(mergeYaml);
    });

    it('should merge the yml files.', function () {
        var finalYaml = mergeYaml([
           __dirname + '/fixtures/config1.yml',
            __dirname + '/fixtures/config2.yml'
        ]);
        assert.equal(finalYaml[0].foo, 'bar');
        assert.equal(finalYaml[0].bar.foo, 'x');
        assert.equal(finalYaml[0].bar.x, 'y');
        assert.equal(finalYaml[0].bar.y, 'z');
        assert.equal(finalYaml[0].something, 'else');
    });
});