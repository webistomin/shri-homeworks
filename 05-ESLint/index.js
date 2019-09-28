/**
 * @fileoverview _.map to native Array#map
 * @author webistomin
 */
'use strict';

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var requireIndex = require('requireindex');

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

// import all rules in lib/rules
module.exports.rules = requireIndex(__dirname + '/lib/rules');

module.exports.configs = {
  recommended: {
    rules: {
      'lodash-to-native/map': 2,
    },
  },
};



