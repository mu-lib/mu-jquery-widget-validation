(function (modules, factory) {
  var root = this;
  if (typeof define === "function" && define.amd) {
    define(modules, factory);
  } else if (typeof module === "object" && module.exports) {
    module.exports = factory.apply(root, modules.map(require));
  } else {
    root["mu-jquery-widget-validation/examples/basic"] = factory.apply(root, modules.map(function (m) {
      return root[m.replace(/^\.{2}/, "mu-jquery-widget-validation")];
    }));
  }
})(["../widget"], function (widget) {
  return widget.extend({
    "on/submit": function ($event) {
      console.log($event);
      return false;
    }
  });
});