"use strict";

var tools = require('browserify-transform-tools');

module.exports = tools.makeStringTransform('emptysassify', {
    includeExtensions: ['.css', '.sass', '.scss'],
    evaluateArguments: true
}, function(content, opts, done) {
    done(null, content.replace(/.+/g, ""));
});
