'use strict';


/**
 *
 */
module.exports = function(test, strict) {
  if (strict !== true) return test instanceof Set;
  try {
    Set.prototype.has.call(test);
    return true;
  } catch(e) { return false; }
};
