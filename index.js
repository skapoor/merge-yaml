// Copyright 2016 Yahoo Inc.
// Licensed under the terms of the New-MIT license. Please see LICENSE file in the project root for terms.
'use strict';

var jsYaml = require('js-yaml'),
    fs = require('fs'),
    lodash = require('lodash.merge');

var merge = function (filesArray) {
    var mergedConfig;
    filesArray.forEach(function (file) {
        var parsedConfig = jsYaml.safeLoad(fs.readFileSync(file, 'utf8'));
        if (!mergedConfig) {
            mergedConfig = parsedConfig;
        } else {
            /* The last files will take the highest precedence */
            lodash(mergedConfig, parsedConfig);
        }
    });
    return mergedConfig;
};

module.exports = merge;
