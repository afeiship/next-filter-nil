/*!
 * name: next-filter-nil
 * url: https://github.com/afeiship/next-filter-nil
 * version: 1.0.0
 * date: 2019-09-21T12:02:28.199Z
 * license: MIT
 */

(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');

  nx.filterNil = function(inTarget, inNil) {
    var target = Array.isArray(inTarget) ? inTarget : [inTarget];
    target &&
      target.forEach(function(item) {
        nx.forIn(item, function(key, value) {
          if (value === inNil) {
            delete item[key];
          }
          if (item[key] !== null) {
            if (typeof item[key] === 'object') {
              return nx.filterNil(value, inNil);
            }
          }
        });
      });
    return inTarget;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.filterNil;
  }
})();

//# sourceMappingURL=next-filter-nil.js.map
