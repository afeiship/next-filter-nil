(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');
  var RETURN_NIL = function(_, value) { return value == null; };

  nx.filterNil = function(inTarget, inCallback) {
    var callback = inCallback || RETURN_NIL;
    var target = Array.isArray(inTarget) ? inTarget : [inTarget];
    target.forEach(function(item) {
      nx.forIn(item, function(key, value) {
        if (callback(key, value, item)) {
          delete item[key];
        }
        if (item[key] !== null) {
          if (typeof item[key] === 'object') {
            return nx.filterNil(value, callback);
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
